import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { YummyDataService, Recipe } from '../../services/yummy-data-service/yummy-data.service';
import { RouteService } from '../../services/route-service/route.service';

const SELECTED_INGREDIENTS_KEY = 'selectedIngredients';

@Component({
  selector: 'app-search-by-ingredients',
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css']
})
export class SearchByIngredientsComponent implements OnInit {
  recipes: Recipe[];
  preselectedIngredients$: Observable<string[]>;
  isLoading = false;

  constructor(private yummyDataService: YummyDataService,
    private routeService: RouteService) {
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
    this.preselectedIngredients$ = this.routeService.getMultiValuesQueryParamObservable(SELECTED_INGREDIENTS_KEY);
  }

  updateRecipes(ingredients: string[]) {
    if (ingredients.length > 0) {
      this.isLoading = true;
      const recipes$ = this.yummyDataService.findRecipesByIngredients(ingredients, 5);
      recipes$.subscribe(recipes => {
        this.recipes = recipes;
        this.isLoading = false;
      });
    } else {
      this.recipes = null;
    }
    this.routeService.updateMultiValuesQueryParam(SELECTED_INGREDIENTS_KEY, ingredients);
  }

  autoComplete(value): Observable<string[]> {
    return this.yummyDataService.autoCompleteIngredient(value, 5);
  }

}
