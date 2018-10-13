import { Component, OnInit } from '@angular/core';
import { YummyDataService, FoodTrivia} from '../../services/yummy-data-service/yummy-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private yummyDataService: YummyDataService) { }

  trivia: string;

  ngOnInit() {
    const result = this.yummyDataService.getRandomFoodTrivia();
    result.subscribe(e => this.trivia = e.text);
  }

}
