import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { YummyDataService, Recipe } from '../../services/yummy-data-service/yummy-data.service';
import { RouteService } from '../../services/route-service/route.service';

const SELECTED_RECIPE_KEY = 'selectedRecipe';
@Component({
  selector: 'search-by-recipe',
  templateUrl: './search-by-recipe.component.html',
  styleUrls: ['./search-by-recipe.component.css']
})
export class SearchByRecipeComponent implements OnInit {
  private recipes: Observable<Recipe[]>;
  private preselectedRecipe: Observable<string>;

  constructor(private yummyDataService: YummyDataService,
    private routeService: RouteService) { 
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
    this.preselectedRecipe = this.routeService.getQueryParamObservable(SELECTED_RECIPE_KEY);
  }

  recipeChanged(recipe: string) {
    if (recipe) {
      this.recipes = this.yummyDataService.findRecipe(recipe, 5);
    } else {
      this.recipes = empty();
    }
    this.routeService.updateQueryParam(SELECTED_RECIPE_KEY, recipe);
  }

  public autoComplete(value): Observable<string[]> {
    return this.yummyDataService.autoCompleteRecipe(value, 5);
  }

}
