import { Component, OnInit } from "@angular/core";
import { Observable, empty } from "rxjs";
import { UserPreferencesService } from "../../services/user-preferences/user-preferences.service";
import {
  YummyDataService,
  Recipe
} from '../../services/yummy-data-service/yummy-data.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css']
})
export class UserFavoritesComponent implements OnInit {
  constructor(
    private userPreferencesService: UserPreferencesService,
    private yummyDataService: YummyDataService
  ) {}
  public recipes$: Observable<Recipe[]>;
  ngOnInit() {
    const ids = this.userPreferencesService.getFavorites();
    this.recipes$ = this.yummyDataService.getRecipesByIds(ids);
  }
}
