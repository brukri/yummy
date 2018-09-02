import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { SpoonacularService } from '../spoonacular/spoonacular.service';

export interface Ingredient {
  name: string;
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  ingredients: String[] = [];
  recipes: Object = [];

  constructor(private spoonacularService:SpoonacularService) { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.ingredients.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(ingredient: String): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  onButtonClick(event) {
    this.spoonacularService.findRecipesByIngredients(this.ingredients, 5)
    .subscribe(recipes => this.recipes = recipes);
  }

}
