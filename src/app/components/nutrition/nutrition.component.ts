import { Component, OnInit, Input } from '@angular/core';
import { Nutrition } from '../../services/yummy-data-service/yummy-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  @Input()
  nutrition: Nutrition;
  constructor() { }

  ngOnInit() {
  }

}
