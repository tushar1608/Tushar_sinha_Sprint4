import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userDataService: UserDataService, private authenticationService: AuthenticationService, private router: Router) {

  }
  onSubmit() {
    this.userDataService.loginUser(this.loginForm.value).subscribe((result) => {
        this.authenticationService.setAuthToken(result);
        this.router.navigate(['user-information']);
    });
  }
}