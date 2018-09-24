import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YummyDataService,RecipeDetails, WinePairing, Nutrition } from '../../services/yummy-data-service/yummy-data.service';
import { Observable, empty } from 'rxjs';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

public RecipeDetails
  nutrition: Nutrition;
  recipeDetail: RecipeDetails;
  recipeDetail$: Observable<RecipeDetails>;

  constructor(private route: ActivatedRoute, private location: Location,private yummyDataService:YummyDataService) { }


  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeDetail$ = this.yummyDataService.getRecipeDetailsForId(id.toString());
    this.yummyDataService.getRecipeDetailsForId(id.toString()).subscribe(recipeDetail => this.recipeDetail = recipeDetail);
  }

  isWinePairingPanelDisabled(): boolean {
    return !(this.recipeDetail && this.recipeDetail.winePairing);
  }

  isNutritionPanelDisabled(): boolean {
    return false;
  }

  onNutritionPanelOpen() {
    if (!this.nutrition) {
      this.recipeDetail$.subscribe(recipeDetail => {
        this.yummyDataService.guessNutritionByRecipe(recipeDetail.title).subscribe(nutrition => this.nutrition = nutrition);
      });
    }
  }

  onNutritionPanelClose() {
    
  }
}
