import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiKey} from './apiKey';

const SERVICE_URI = 'http://localhost:3100';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private headers: HttpHeaders;

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      'X-Mashape-Key' : apiKey,
      'X-Mashape-Host' :   'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
    });
  }

  findRecipesByIngredients(ingredients : String[], numberOfResults : number): Observable<Object> {
    return this.http.get(`${SERVICE_URI}/recipes/findByIngredients`, {
      headers: this.headers,
      params: {
        'ingredients' : ingredients.join(','),
        'number' : numberOfResults.toString(),
        'ranking': '1'
      },
    });
  }

  
  getRecipeDetailsForId(recipeId : number): Observable<Object> {
    return this.http.get(`${SERVICE_URI}/recipes/${recipeId}/information`, {
      headers: this.headers,
      params: {
        'id' : recipeId.toString(),
        'includeNutrition':false.toString()
      },
    });
  }

  autoCompleteIngredient(ingredient : String, numberOfResults : number): Observable<Object> {
    return this.http.get(`${SERVICE_URI}/food/ingredients/autocomplete`, {
      headers: this.headers,
      params: {
        'query' : ingredient.toString(),
        'number' : numberOfResults.toString()
      },
    });
  }
}
