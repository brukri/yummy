import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css']
})
export class UserFavoritesComponent implements OnInit {

  constructor(private userPreferencesService: UserPreferencesService) { }

  ngOnInit() {
  }

}
