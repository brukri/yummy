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

  @Input() recipeDetail: RecipeDetails;
  recipe$: Observable<RecipeDetails>;
  winePairing$: Observable<WinePairing>;

  constructor(private route: ActivatedRoute, private location: Location,private yummyDataService:YummyDataService) { }


  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe$ = this.yummyDataService.getRecipeDetailsForId(id.toString());
    this.recipe$.subscribe(recipeDetail => this.recipeDetail = recipeDetail);
  }

  onWinePairingPanelOpen() {
    if (this.winePairing$ === null) {
      this.recipe$.subscribe(recipeDetail => {
        this.winePairing$ = this.yummyDataService.findWinePairingByFood(recipeDetail.title, 50);
      });
    }
  }

  onWinePairingPanelClose() {
    return null;
  }

}
