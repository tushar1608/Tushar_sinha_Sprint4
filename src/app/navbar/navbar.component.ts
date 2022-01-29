import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Project Management';

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  isLoggedIn() {  
      return this.authenticationService.isLoggedIn();
  }

  logout() {
      this.authenticationService.clearAuthToken();
      this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}
