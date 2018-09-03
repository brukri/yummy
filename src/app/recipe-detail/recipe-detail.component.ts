import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpoonacularService } from '../spoonacular/spoonacular.service';


export interface RecipeDetail {
  title: string;
  image:string;
  vegetarian:boolean;
}

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Object;
  constructor(private route: ActivatedRoute, private location: Location,private spoonacularService:SpoonacularService) { }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.spoonacularService.getRecipeDetailsForId(id).subscribe(recipeDetail => this.recipeDetail = recipeDetail);
  }

}
