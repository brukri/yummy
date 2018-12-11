import { Component, OnInit, Input } from '@angular/core';
import { YummyDataService, FoodTrivia, Recipe} from '../../services/yummy-data-service/yummy-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isLoading = false;
  constructor(private yummyDataService: YummyDataService) { }
  @Input() recipes: Recipe[];
  trivia: string;

  ngOnInit() {
    const result = this.yummyDataService.getRandomFoodTrivia();
    result.subscribe(e => this.trivia = e.text);
    this.isLoading = true;
    const recipes$ = this.yummyDataService.getRandomRecipes();
    recipes$.subscribe(result => {
      this.recipes = result;
      this.isLoading = false;
    });
  }

}
