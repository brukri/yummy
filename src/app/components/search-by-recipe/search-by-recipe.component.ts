import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { YummyDataService, Recipe } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'search-by-recipe',
  templateUrl: './search-by-recipe.component.html',
  styleUrls: ['./search-by-recipe.component.css']
})
export class SearchByRecipeComponent implements OnInit {
  private recipes: Observable<Recipe[]>;

  constructor(private yummyDataService: YummyDataService) { 
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
  }

  refreshRecipes(recipe: string) {
    this.recipes = this.yummyDataService.findRecipe(recipe, 5);
  }

  public autoComplete(value): Observable<string[]> {
    return this.yummyDataService.autoCompleteRecipe(value, 5);
  }

}
