import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'yummy-recipe-of-day',
  templateUrl: './recipe-of-day.component.html'
})
export class RecipeOfDayComponent implements OnInit {
  @Input() recipes: Recipe[];
  constructor() { }

  ngOnInit() {
  }

}
