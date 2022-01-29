import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../shared/models/user.model";
import { UserManagementService } from "../shared/services/user-management.service";

@Component({
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.css']
  })
  export class UserInformationComponent implements OnInit{
    public users: Array<User>;
    constructor(private router: Router, private userManagementService: UserManagementService) {
        
    }

    ngOnInit() {
        this.userManagementService.getAllUsers().subscribe((result: Array<User>) => {
            this.users = result;
        })
    }

    newUser() {
        this.router.navigate(['user-information/add']);
    }

    updateUser() {
        this.router.navigate(['user-information/update']);
    }
  }
  