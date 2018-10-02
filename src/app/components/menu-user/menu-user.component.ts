import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
