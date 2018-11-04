import { Component, OnInit,Input } from "@angular/core";
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
  isLoading = false;
  constructor(
    private userPreferencesService: UserPreferencesService,
    private yummyDataService: YummyDataService
  ) {}
  @Input() recipes: Recipe[];
  ngOnInit() {
    const ids = this.userPreferencesService.getFavorites();
    if (ids.length > 0){
    this.isLoading = true;
    const recipes$ = this.yummyDataService.getRecipesByIds(ids);
    recipes$.subscribe(result => {
      this.recipes = result;
      this.isLoading = false;
    });
    }
    this.recipes = null;
  }
  }
}
