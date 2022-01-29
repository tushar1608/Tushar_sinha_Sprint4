import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private userDataService: UserDataService, private router: Router) {

    }
    
    onSubmit() {
        this.userDataService.registerUser(this.registerForm.value).subscribe((result: any) => {
            this.router.navigate(['/login']);
        });
    }
}