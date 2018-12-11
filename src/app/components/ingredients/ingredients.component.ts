import { Component, OnInit, Input} from '@angular/core';
import { Ingredient } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'ingredients-list',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'unit', 'name'];
  @Input() ingredients: Ingredient[];
  constructor() { }

  ngOnInit() {
  }

}
