import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { YummyDataService, Recipe } from '../../services/yummy-data-service/yummy-data.service';
import { RouteService } from '../../services/route-service/route.service';
import {NUMBER_OF_RESULTS} from '../../yummyConstants';

const SELECTED_RECIPE_KEY = 'selectedRecipe';
@Component({
  selector: 'yummy-search-by-recipe',
  templateUrl: './search-by-recipe.component.html'
})
export class SearchByRecipeComponent implements OnInit {
  recipes: Recipe[];
  totalResults: number;
  usedName: string;
  preselectedRecipe: Observable<string>;
  isLoading = false;

  constructor(private yummyDataService: YummyDataService,
    private routeService: RouteService) {
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
    this.preselectedRecipe = this.routeService.getQueryParamObservable(SELECTED_RECIPE_KEY);
  }

  recipeChanged(recipe: string, startIndex: number = 0) {
    if (startIndex === 0) {
      this.recipes = new Array<Recipe>();
    }
    if (recipe) {
      this.usedName = recipe;
      this.isLoading = true;
      const recipes$ = this.yummyDataService.findRecipe(recipe, startIndex);
      recipes$.subscribe(result => {
        this.totalResults = result.totalResults;
        result.results.forEach(e => this.recipes.push(e));
      }, err => {
        this.isLoading = false;
        this.totalResults = 0;
      }, () => {
        this.isLoading = false;
      });
    } else {
      this.recipes = null;
      this.totalResults = 0;
    }
    this.routeService.updateQueryParam(SELECTED_RECIPE_KEY, recipe);
  }

  loadMore() {
    this.recipeChanged(this.usedName, this.recipes.length);
  }

  autoComplete(value): Observable<string[]> {
    return this.yummyDataService.autoCompleteRecipe(value, NUMBER_OF_RESULTS);
  }

}
