import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'app-recipe-of-day',
  templateUrl: './recipe-of-day.component.html',
  styleUrls: ['./recipe-of-day.component.css']
})
export class RecipeOfDayComponent implements OnInit {
  @Input() recipes: Recipe[];
  constructor() { }

  ngOnInit() {
  }

}
