import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YummyDataService, RecipeDetails, WinePairing, Nutrition } from '../../services/yummy-data-service/yummy-data.service';
import { Observable, empty } from 'rxjs';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'yummy-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnInit {
  nutrition$: Observable<Nutrition>;
  recipeDetail: RecipeDetails;
  recipeDetail$: Observable<RecipeDetails>;
  isFavorite: boolean;
  isLoading: boolean;

  constructor(private route: ActivatedRoute,
    private location: Location, private yummyDataService: YummyDataService,
    private userPreferencesService: UserPreferencesService, private authService: AuthService) { }
  ngOnInit() {
    this.nutrition$ = null;
    this.loadRecipe();
  }

  loadRecipe(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeDetail$ = this.yummyDataService.getRecipeDetailsForId(id.toString());
    this.yummyDataService.getRecipeDetailsForId(id.toString()).subscribe(recipeDetail => {
      this.recipeDetail = recipeDetail;
      this.isLoading = false;
    });
    this.isFavorite = this.userPreferencesService.isFavorite(id.toString());
  }

  onFavoriteChange() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.userPreferencesService.addToFavorites(this.recipeDetail.id.toString());
    } else {
      this.userPreferencesService.removeFromFavorites(this.recipeDetail.id.toString());
    }
  }

  shouldDisplayFavoriteButton() {
    return this.authService.isLoggedIn;
  }

  onNutritionPanelOpen() {
    this.recipeDetail$.subscribe(recipeDetail => {
      this.nutrition$ = this.yummyDataService.guessNutritionByRecipe(recipeDetail.title);
    });
  }
}
