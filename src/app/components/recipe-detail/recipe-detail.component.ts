import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YummyDataService,RecipeDetails, WinePairing, Nutrition } from '../../services/yummy-data-service/yummy-data.service';
import { Observable, empty } from 'rxjs';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  nutrition: Nutrition;
  recipeDetail: RecipeDetails;
  recipeDetail$: Observable<RecipeDetails>;
  isFavorite: boolean;
  isLoading: boolean;

  constructor(private route: ActivatedRoute,
    private location: Location, private yummyDataService: YummyDataService,
    private userPreferencesService: UserPreferencesService, private authService: AuthService) { }
   ngOnInit() {
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

  isWinePairingPanelDisabled(): boolean {
    return !(this.recipeDetail && this.recipeDetail.winePairing);
  }

  isNutritionPanelDisabled(): boolean {
    return false;
  }

  public onFavoriteChange() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.userPreferencesService.addToFavorites(this.recipeDetail.id.toString());
    } else {
      this.userPreferencesService.removeFromFavorites(this.recipeDetail.id.toString());
    }
  }

  onNutritionPanelOpen() {
    if (!this.nutrition) {
      this.recipeDetail$.subscribe(recipeDetail => {
        this.yummyDataService.guessNutritionByRecipe(recipeDetail.title).subscribe(nutrition => this.nutrition = nutrition);
      });
    }
  }

  shouldDisplayFavoriteButton () {
    return this.authService.isLoggedIn;
  }
}
