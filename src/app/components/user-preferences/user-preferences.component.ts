import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {

  constructor(private userPreferencesService: UserPreferencesService) { }

  ngOnInit() {
  }

}
