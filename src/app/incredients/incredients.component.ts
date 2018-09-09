import { Component, OnInit,Input} from '@angular/core';
import { Ingredient } from '../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'incredients-list',
  templateUrl: './incredients.component.html',
  styleUrls: ['./incredients.component.css']
})
export class IncredientsComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'unit', 'name'];
  @Input() incredients: Ingredient[];
  constructor() { }

  ngOnInit() {
  }

}
