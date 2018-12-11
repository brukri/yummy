import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent {
  @Input() recipes: Recipe[];
  @Input() expectData: boolean;

}
