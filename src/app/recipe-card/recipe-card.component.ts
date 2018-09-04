import { Component, OnInit,Input } from '@angular/core';
import {MatCard} from '@angular/material';
import { Recipe } from '../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
