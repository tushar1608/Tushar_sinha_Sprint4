import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from '../shared/services/user-management.service';

@Component({
    templateUrl: './user-information-add.component.html',
    styleUrls: ['./user-information-add.component.css']
})
export class UserInformationAddComponent {
    registerForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private router: Router, private userManagementService: UserManagementService, private location: Location) {

    }
    
    onSubmit() {
        this.userManagementService.addUser(this.registerForm.value).subscribe((result) => {
        });
    }

    backButtonClicked() {
        this.location.back();
    }
}