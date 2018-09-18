import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { YummyDataService, Recipe } from '../../services/yummy-data-service/yummy-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../services/route-service/route.service';

@Component({
  selector: 'search-by-recipe',
  templateUrl: './search-by-recipe.component.html',
  styleUrls: ['./search-by-recipe.component.css']
})
export class SearchByRecipeComponent implements OnInit {
  private recipes: Observable<Recipe[]>;
  private preselectedRecipe: string;

  constructor(private yummyDataService: YummyDataService,
    private routeService: RouteService) { 
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
    this.preselectedRecipe = this.routeService.getQueryParam('selectedRecipe');
  }

  recipeUpdated(recipe: string) {
    this.recipes = this.yummyDataService.findRecipe(recipe, 5);
    this.routeService.updateQueryParam('selectedRecipe', recipe);
  }

  public autoComplete(value): Observable<string[]> {
    return this.yummyDataService.autoCompleteRecipe(value, 5);
  }

}
