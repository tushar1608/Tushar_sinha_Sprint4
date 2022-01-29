import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { User } from "../shared/models/user.model";
import { UserManagementService } from "../shared/services/user-management.service";

@Component({
    templateUrl: './user-information-update.component.html',
    styleUrls: ['./user-information-update.component.css']
  })
  export class UserInformationUpdateComponent implements OnInit{
    public users: Array<User>;
    public activeSelectionIndex = 0;
    updateUserForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        id: new FormControl('')
    });
    constructor(private userManagementService: UserManagementService, private location: Location) {
        
    }

    ngOnInit() {
        this.userManagementService.getAllUsers().subscribe((result: Array<User>) => {
            this.users = result;
            this.initialize();
        })
    }

    initialize() {
        this.updateUserForm.get('firstName').setValue(this.users[this.activeSelectionIndex].firstName);
        this.updateUserForm.get('lastName').setValue(this.users[this.activeSelectionIndex].lastName);
        this.updateUserForm.get('email').setValue(this.users[this.activeSelectionIndex].email.emailAddress);
        this.updateUserForm.get('password').setValue(this.users[this.activeSelectionIndex].password);
        this.updateUserForm.get('id').setValue(this.users[this.activeSelectionIndex].id);
    }
    
    onUpdate() {
        this.userManagementService.updateUser(this.updateUserForm.value).subscribe(() => {});
        console.log(this.updateUserForm.value)
    }

    onDelete() {
        this.userManagementService.deleteUser(this.updateUserForm.get('id').value).subscribe(() => {});
        this.next();
    }

    onCancel() {
        this.location.back();
    }

    prev() {
        if(this.activeSelectionIndex != 0) {
            this.activeSelectionIndex--;
            this.initialize();
        }
    }

    next() {
        if(this.activeSelectionIndex != this.users.length-1) {
            this.activeSelectionIndex++;
            this.initialize();
        }
    }
  }
  