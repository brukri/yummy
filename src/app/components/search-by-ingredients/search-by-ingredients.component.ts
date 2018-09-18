import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { YummyDataService, Recipe } from '../../services/yummy-data-service/yummy-data.service';
import { RouteService } from '../../services/route-service/route.service';

@Component({
  selector: 'app-search-by-ingredients',
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css']
})
export class SearchByIngredientsComponent implements OnInit {
  public recipes: Observable<Recipe[]>;
  public preselectedIngredients: string[];

  constructor(private yummyDataService: YummyDataService,
    private routeService: RouteService) {
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
    this.preselectedIngredients = this.routeService.getMultiValuesQueryParam('selectedIngredients');
  }

  updateRecipes(ingredients: string[]) {
    this.recipes = this.yummyDataService.findRecipesByIngredients(ingredients, 5);
    this.routeService.updateMultiValuesQueryParam('selectedIngredients', ingredients);
  }

  autoComplete(value): Observable<string[]> {
    return this.yummyDataService.autoCompleteIngredient(value, 5);
  }

}
