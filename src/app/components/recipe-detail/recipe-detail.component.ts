import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YummyDataService,RecipeDetails, WinePairing } from '../../services/yummy-data-service/yummy-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

public RecipeDetails
  recipeDetail: RecipeDetails;

  constructor(private route: ActivatedRoute, private location: Location,private yummyDataService:YummyDataService) { }


  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.yummyDataService.getRecipeDetailsForId(id.toString()).subscribe(recipeDetail => this.recipeDetail = recipeDetail);
  }

  isWinePairingPanelDisabled(): boolean {
    return !(this.recipeDetail && this.recipeDetail.winePairing);
  }

}
