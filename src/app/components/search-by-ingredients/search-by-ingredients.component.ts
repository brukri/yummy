import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { YummyDataService, Recipe } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'app-search-by-ingredients',
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css']
})
export class SearchByIngredientsComponent implements OnInit {
  recipes: Observable<Recipe[]>;
  constructor(private yummyDataService: YummyDataService) {
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
  }

  updateRecipes(ingredients:string[]) {
    this.recipes = this.yummyDataService.findRecipesByIngredients(ingredients, 5);
  }

  autoComplete(value) : Observable<string[]>{
    return this.yummyDataService.autoCompleteIngredient(value, 5);
  }

}
