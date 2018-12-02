import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpHeaderInterceptorService } from './http-header-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private headers: HttpHeaders;
  private baseUrl: string;

  
  constructor(private http: HttpClient) {
    this.baseUrl = environment.spoonacular.baseUrl;
  }

  findRecipesByIngredients(ingredients: String[], intolerances: String[], diets: String[], numberOfResults: number, startIndex = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/searchComplex`, {
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
      params: {
        'ids' : recipeIds.join(','),
        'includeNutrition': false.toString()
      },
    });
  }

  getRecipeDetailsForId(recipeId : string): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/${recipeId}/information`, {
      params: {
        'id' : recipeId.toString(),
        'includeNutrition': false.toString()
      },
    });
  }

  getRandomRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/random`, {
      params: {
        'limitLicense' : false.toString(),
        'number': '3'
      },
    });
  }

  autoCompleteIngredient(ingredient: String, numberOfResults: number, provideMetaInformation: boolean): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/ingredients/autocomplete`, {
      params: {
        'query' : ingredient.toString(),
        'number' : numberOfResults.toString(),
        'metaInformation': provideMetaInformation.toString(),
      },
    });
  }

  autoCompleteRecipe(recipe: string, numberOfResults: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/autocomplete`, {
      params: {
        'query' : recipe,
        'number' : numberOfResults.toString()
      },
    });
  }

  findWinePairingByFood(food: string, maxPrice: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/wine/pairing`, {
      params: {
        'food' : food,
        'maxPrice' : maxPrice.toString()
      },
    });
  }

  guessNutritionByRecipe(recipeTitle: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/guessNutrition`, {
      params: {
        'title' : recipeTitle,
      },
    });
  }

  getRandomFoodTrivia(): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/trivia/random`, {
    });
  }

  findDishPairingForGrape(grape: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/food/wine/dishes`, {
      params: {
        'wine' : grape
      }
    });
  }
}
