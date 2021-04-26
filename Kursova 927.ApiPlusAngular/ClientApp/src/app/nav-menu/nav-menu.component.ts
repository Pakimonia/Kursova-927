import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isLogined: boolean;
  isAdmin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.isLogined = this.authService.isLoggined();
    this.isAdmin = this.authService.isAdmin();
    this.authService.authEvents.subscribe(() => {
      this.isLogined = this.authService.isLoggined();
      this.isAdmin = this.authService.isAdmin();
    })
  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  Logout() {
    this.authService.Logout();
  }


}