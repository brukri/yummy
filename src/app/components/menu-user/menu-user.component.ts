import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'yummy-menu-user',
  templateUrl: './menu-user.component.html'
})
export class MenuUserComponent {

  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
   }
}
