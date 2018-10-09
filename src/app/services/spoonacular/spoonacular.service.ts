import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiKey} from '../apiKey';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private headers: HttpHeaders;
  private baseUrl: string;

  
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'X-Mashape-Key' : apiKey,
      'X-Mashape-Host' :  'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
    });
    this.baseUrl = environment.spoonacular.baseUrl;
  }

  findRecipesByIngredients(ingredients: String[], numberOfResults: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/findByIngredients`, {
      headers: this.headers,
      params: {
        'ingredients' : ingredients.join(','),
        'number' : numberOfResults.toString(),
        'ranking': '1'
      },
    });
  }

  findRecipe(recipe: string, numberOfResults: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/search`, {
      headers: this.headers,
      params: {
        'query' : recipe,
        'number' : numberOfResults.toString(),
        'ranking': '1'
      },
    });
  }

  getRecipeDetailsForId(recipeId : string): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/${recipeId}/information`, {
      headers: this.headers,
      params: {
        'id' : recipeId.toString(),
        'includeNutrition': false.toString()
      },
    });
  }

  autoCompleteIngredient(ingredient: String, numberOfResults: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/ingredients/autocomplete`, {
      headers: this.headers,
      params: {
        'query' : ingredient.toString(),
        'number' : numberOfResults.toString()
      },
    });
  }

  autoCompleteRecipe(recipe: string, numberOfResults: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/autocomplete`, {
      headers: this.headers,
      params: {
        'query' : recipe,
        'number' : numberOfResults.toString()
      },
    });
  }

  findWinePairingByFood(food: string, maxPrice: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/wine/pairing`, {
      headers: this.headers,
      params: {
        'food' : food,
        'maxPrice' : maxPrice.toString()
      },
    });
  }

  guessNutritionByRecipe(recipeTitle: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/guessNutrition`, {
      headers: this.headers,
      params: {
        'title' : recipeTitle,
      },
    });
  }
}
