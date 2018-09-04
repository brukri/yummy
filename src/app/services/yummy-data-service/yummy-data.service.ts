import { Injectable } from '@angular/core';
import { SpoonacularService } from '../spoonacular/spoonacular.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Recipe {
  id: String;
  title: string;
  image: string;
  imageType: string;
  likes: string;
}

@Injectable({
  providedIn: 'root'
})
export class YummyDataService {

  constructor(private spoonacularService : SpoonacularService) { }

  findRecipesByIngredients(ingredients : String[], numberOfResults : number): Observable<Recipe[]> {
    return this.spoonacularService.findRecipesByIngredients(ingredients, numberOfResults).pipe(
      map(result => {
        return result.map(item => {
          return {id: item.id,title: item.title, image: item.image, imageType: item.imageType, likes: item.likes};
        });
      })
    );
  }

  autoCompleteIngredient(ingredient : String, numberOfResults : number): Observable<[string]> {
    return this.spoonacularService.autoCompleteIngredient(ingredient, numberOfResults).pipe(
      map(result => {
        return result.map(item => {
          return item.name;
        });
      })
    );
  }
}
