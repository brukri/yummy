import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVICE_URI = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private headers: HttpHeaders;

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({
      'X-Mashape-Key' : 'API_KEY',
      'X-Mashape-Host' :   'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
    });
  }

  findRecipesByIngredients(ingredients : String[], recipesNumber : number): Observable<Object> {
    return this.http.get(`${SERVICE_URI}/recipes/findByIngredients`, {
      headers: this.headers,
      params: {
        'ingredients' : ingredients.join(','),
        'number' : recipesNumber.toString(),
        'ranking': '1'
      },
    });
  }
}
