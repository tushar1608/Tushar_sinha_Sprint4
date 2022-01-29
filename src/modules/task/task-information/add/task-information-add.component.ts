import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/modules/project/project-information/shared/models/project.model';
import { ProjectManagementService } from 'src/modules/project/project-information/shared/services/project-management.service';
import { User } from 'src/modules/user/user-information/shared/models/user.model';
import { UserManagementService } from 'src/modules/user/user-information/shared/services/user-management.service';
import { TaskManagementService } from '../shared/services/task-management.service';


@Component({
    templateUrl: './task-information-add.component.html',
    styleUrls: ['./task-information-add.component.css']
})
export class TaskInformationAddComponent {
    taskForm = new FormGroup({
        projectId: new FormControl(''),
        assignedToUserId: new FormControl(''),
        detail: new FormControl('')
    });
    projects: Project[];
    users: User[];

    constructor(private router: Router, private taskManagementService: TaskManagementService, private projectManagementService: ProjectManagementService, private userManagementService: UserManagementService, private location: Location) {
        this.projectManagementService.getAllProjects().subscribe((result:Array<Project>) => {
            this.projects = result;
        });
        this.userManagementService.getAllUsers().subscribe((result:Array<User>) => {
            this.users = result;
        });
    }

    onBack() {
        this.location.back();
    }
    
    onSubmit() { 
        this.taskManagementService.addTask(this.taskForm.value).subscribe((result) => {
        });
    }
}