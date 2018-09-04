import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../services/spoonacular/spoonacular.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YummyDataService, Recipe } from '../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipes : Observable<Recipe[]>;
  constructor(private yummyDataService: YummyDataService) { 
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
  }

  updateIngredients(ingredients:string[]) {
    this.recipes = this.yummyDataService.findRecipesByIngredients(ingredients, 5);
  }

  autoComplete(value) : Observable<string[]>{
    return this.yummyDataService.autoCompleteIngredient(value, 5);
  }

}
