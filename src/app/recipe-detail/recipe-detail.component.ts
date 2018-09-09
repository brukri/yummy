import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { YummyDataService,RecipeDetails } from '../services/yummy-data-service/yummy-data.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

public RecipeDetails

  @Input() recipeDetail: RecipeDetails;
  constructor(private route: ActivatedRoute, private location: Location,private yummyDataService:YummyDataService) { }


  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    var id = +this.route.snapshot.paramMap.get('id');
    this.yummyDataService.getRecipeDetailsForId(id.toString()).subscribe(recipeDetail => this.recipeDetail = recipeDetail);
  }

}
