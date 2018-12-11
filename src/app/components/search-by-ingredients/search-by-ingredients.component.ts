import { Component, OnInit } from "@angular/core";
import { Observable, empty } from "rxjs";
import {
  YummyDataService,
  Recipe
} from "../../services/yummy-data-service/yummy-data.service";
import { RouteService } from "../../services/route-service/route.service";
import { map } from "rxjs/operators";
import {NUMBER_OF_RESULTS} from '../../yummyConstants';

const SELECTED_INGREDIENTS_KEY = "selectedIngredients";

@Component({
  selector: "app-search-by-ingredients",
  templateUrl: "./search-by-ingredients.component.html",
  styleUrls: ["./search-by-ingredients.component.css"]
})
export class SearchByIngredientsComponent implements OnInit {
  recipes: Recipe[];
  preselectedIngredients$: Observable<string[]>;
  isLoading = false;
  private usedIngredients: string[];
  constructor(
    private yummyDataService: YummyDataService,
    private routeService: RouteService
  ) {
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
    this.preselectedIngredients$ = this.routeService.getMultiValuesQueryParamObservable(
      SELECTED_INGREDIENTS_KEY
    );
  }

  updateRecipes(ingredients: string[], startIndex: number = 0) {
    if (startIndex === 0) {
      this.recipes = new Array<Recipe>();
    }

    if (ingredients.length > 0) {
      this.usedIngredients = ingredients;
      this.isLoading = true;
      const recipes$ = this.yummyDataService.findRecipesByIngredients(ingredients, startIndex);
      recipes$.subscribe((resolvedRecipes) => {
        resolvedRecipes.forEach(e => this.recipes.push(e));
      }, err => {
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
    } else {
      this.recipes = null;
    }
    this.routeService.updateMultiValuesQueryParam(
      SELECTED_INGREDIENTS_KEY,
      ingredients
    );
  }

  loadMore() {
    this.updateRecipes(this.usedIngredients, this.recipes.length);
  }

  autoComplete(value): Observable<string[]> {
    const ingredients$ = this.yummyDataService.autoCompleteIngredient(value, NUMBER_OF_RESULTS);
    return ingredients$.pipe(
      map(result => {
        return result.map(item => item.name);
      })
    );
  }
}
