import { Component, OnInit, Input } from '@angular/core';
import { Nutrition } from '../../services/yummy-data-service/yummy-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'yummy-nutrition',
  templateUrl: './nutrition.component.html'
})
export class NutritionComponent {
  @Input()
  nutrition: Nutrition;

}
