import { Component, OnInit, Input } from '@angular/core';
import { YummyDataService, FoodTrivia, Recipe} from '../../services/yummy-data-service/yummy-data.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'yummy-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isLoading = false;
  authService: AuthService;
  constructor(private yummyDataService: YummyDataService, authService: AuthService) {this.authService = authService; }
  @Input() recipes: Recipe[];
  trivia: string;

  ngOnInit() {
    const result = this.yummyDataService.getRandomFoodTrivia();
    result.subscribe(e => this.trivia = e.text);
    this.isLoading = true;
    const recipes$ = this.yummyDataService.getRandomRecipes();
    recipes$.subscribe(resultEntry => {
      this.recipes = resultEntry;
      this.isLoading = false;
    });
  }

}
