import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../services/spoonacular/spoonacular.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YummyDataService } from '../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipe : any = {};
  constructor(private yummyDataService: YummyDataService) { 
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
  }

  updateIngredients(ingredients:string[]) {
    this.yummyDataService.findRecipesByIngredients(ingredients, 5).subscribe(recipes => {
      this.recipe = recipes[0];
    });
  }

  autoComplete(value) : Observable<string[]>{
    return this.yummyDataService.autoCompleteIngredient(value, 5);
  }

}
