import { Component, OnInit,Input } from '@angular/core';
import {MatCard} from '@angular/material';
import { Recipe } from '../services/yummy-data-service/yummy-data.service';

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
