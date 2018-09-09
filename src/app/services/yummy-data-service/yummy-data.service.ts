import { Injectable } from '@angular/core';
import { SpoonacularService } from '../spoonacular/spoonacular.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  imageType: string;
  likes: string;
}

//Todo: Use inheritance?
export interface RecipeDetails {
  id: string;
  title: string;
  image: string;
  cookingMinutes: number;
  preparationMinutes: number;
  healthScore: number;
  ingredients: Ingredient[];
  diets: string[];
  servings:number;
}

export interface RecipeAttributes {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  sustainable: boolean;
}

export interface Ingredient {
  id: string;
  title: string;
  image: string;
  name: string;
  amount: number;
  unit: string;
}

@Injectable({
  providedIn: 'root'
})
export class YummyDataService {

  constructor(private spoonacularService: SpoonacularService) {

  }

  incredientImageSize = "100x100";

  findRecipesByIngredients(ingredients: String[], numberOfResults: number): Observable<Recipe[]> {
    return this.spoonacularService.findRecipesByIngredients(ingredients, numberOfResults).pipe(
      map(result => {
        return result.map(item => {
          return { id: item.id, title: item.title, image: item.image, imageType: item.imageType, likes: item.likes };
        });
      })
    );
  }




  getRecipeDetailsForId(recipeId: string): Observable<RecipeDetails> {
    return this.spoonacularService.getRecipeDetailsForId(recipeId).pipe(
      map(response => ({
        id: response.id,
        title: response.title,
        image: response.image,
        cookingMinutes: response.cookingMinutes,
        preparationMinutes: response.preparationMinutes,
        healthScore: response.healthScore,
        servings:response.servings,
        ingredients: response.extendedIngredients.map(item => {
          return { id: item.id, title: item.title, image: 'https://spoonacular.com/cdn/ingredients_' + this.incredientImageSize + '/' + item.image, name: item.name, amount: item.measures.metric.amount, unit: item.measures.metric.unitLong };
        }),
        diets: null,
      })));

  }


  autoCompleteIngredient(ingredient: String, numberOfResults: number): Observable<[string]> {
    return this.spoonacularService.autoCompleteIngredient(ingredient, numberOfResults).pipe(
      map(result => {
        return result.map(item => {
          return item.name;
        });
      })
    );
  }
}
