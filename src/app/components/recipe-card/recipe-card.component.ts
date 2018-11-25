import { Component, OnInit,Input } from '@angular/core';
import {MatCard} from '@angular/material';
import { Recipe } from '../../services/yummy-data-service/yummy-data.service';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  public IsFavorite: boolean;
  constructor( private userPreferencesService: UserPreferencesService, private authService: AuthService) { }

  ngOnInit() {
    this.IsFavorite = this.userPreferencesService.isFavorite(this.recipe.id.toString());
  }

  public onFavoriteChange() {
    this.IsFavorite = !this.IsFavorite;
    if (this.IsFavorite) {
      this.userPreferencesService.addToFavorites(this.recipe.id.toString());
    } else {
      this.userPreferencesService.removeFromFavorites(this.recipe.id.toString());
    }
  }

  shouldDisplayFavoriteButton () {
    return this.authService.isLoggedIn;
  }
}
