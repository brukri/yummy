import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'yummy-recipe-overview',
  templateUrl: './recipe-overview.component.html'
})
export class RecipeOverviewComponent {
  @Input() recipes: Recipe[];
  @Input() expectData: boolean;

}
