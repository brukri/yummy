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

  findRecipesByIngredients(ingredients: String[], intolerances: String[], diets: String[], numberOfResults: number, startIndex = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/searchComplex`, {
      headers: this.headers,
      params: {
        'includeIngredients' : ingredients.join(','),
        'intolerances' : intolerances.join(','),
        'diet' : diets.join(','),
        'limitLicense' : 'false',
        'number' : numberOfResults.toString(),
        'offset' : startIndex.toString(),
        'ranking': '1'
      },
    });
  }

  findRecipe(recipe: string, numberOfResults: number, startIndex = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/search`, {
      headers: this.headers,
      params: {
        'query' : recipe,
        'number' : numberOfResults.toString(),
        'offset' : startIndex.toString(),
        'ranking': '1'
      },
    });
  }

  getRecipeDetailsForIds(recipeIds : string[]): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/informationBulk`, {
      headers: this.headers,
      params: {
        'ids' : recipeIds.join(','),
        'includeNutrition': false.toString()
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

  getRandomRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/random`, {
      headers: this.headers,
      params: {
        'limitLicense' : false.toString(),
        'number': '3'
      },
    });
  }

  autoCompleteIngredient(ingredient: String, numberOfResults: number, provideMetaInformation: boolean): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/ingredients/autocomplete`, {
      headers: this.headers,
      params: {
        'query' : ingredient.toString(),
        'number' : numberOfResults.toString(),
        'metaInformation': provideMetaInformation.toString(),
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

  getRandomFoodTrivia(): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/trivia/random`, {
      headers: this.headers
    });
  }

  findDishPairingForGrape(grape: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/wine/dishes`, {
      headers: this.headers,
      params: {
        'wine' : grape
      }
    });
  }
}
