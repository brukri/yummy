import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, YummyDataService } from 'src/app/services/yummy-data-service/yummy-data.service';
import { RouteService } from 'src/app/services/route-service/route.service';
import { filter, map } from 'rxjs/operators';

const SELECTED_GRAPE_KEY = 'selectedGrape';

@Component({
  selector: 'app-search-by-grape',
  templateUrl: './search-by-grape.component.html',
  styleUrls: ['./search-by-grape.component.css']
})
export class SearchByGrapeComponent implements OnInit {
  recipes: Recipe[];
  preselectedGrape: Observable<string>;
  isLoading = false;

  constructor(private yummyDataService: YummyDataService,
    private routeService: RouteService) {
    this.autoComplete = this.autoComplete.bind(this);
  }

  ngOnInit() {
    this.preselectedGrape = this.routeService.getQueryParamObservable(SELECTED_GRAPE_KEY);
  }

  grapeChanged(grape: string) {
    if (grape) {
      this.isLoading = true;
      const recipes$ = this.yummyDataService.findRecipesByDishPairingForGrape(grape);
      recipes$.subscribe(result => {
        this.recipes = [];
        result.forEach(item => item.subscribe(recipe => {
          this.recipes.push(recipe[0]);
        }));
        this.isLoading = false;
      });
    } else {
      this.recipes = null;
    }
    this.routeService.updateQueryParam(SELECTED_GRAPE_KEY, grape);
  }

  public autoComplete(value): Observable<string[]> {
    const ingredients$ = this.yummyDataService.autoCompleteIngredient(value, 100);
    return ingredients$.pipe(map(result => {
      return result.filter(item => item.aisle === 'Alcoholic Beverages'
        && item.image.toLowerCase().includes('wine')).map(item => item.name);
    }));
  }

}
