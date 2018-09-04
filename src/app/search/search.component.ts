import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular/spoonacular.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Recipe} from '../playground/playground.component'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipe : any = {};
  constructor(private spoonacularService : SpoonacularService) { }

  ngOnInit() {
  }

  updateIngredients(ingredients:string[]) {
    this.spoonacularService.findRecipesByIngredients(ingredients, 5).pipe(
      map(result => {
        return result.map(item => {
          return {id: item.id, title: item.title, image: item.image};
        })
      })
    ).subscribe(recipes => {
      this.recipe = recipes[0];
    });
  }

  autoComplete(value) : Observable<string[]>{
    return this.spoonacularService.autoCompleteIngredient(value, 5).pipe(
      map(result => {
        return result.map(item => {
          return item.name;
        })
      })
    );
  }

}
