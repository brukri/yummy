import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../playground/playground.component';
import {MatCard} from '@angular/material';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
