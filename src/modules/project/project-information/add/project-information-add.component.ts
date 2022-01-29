import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectManagementService } from '../shared/services/project-management.service';


@Component({
    templateUrl: './project-information-add.component.html',
    styleUrls: ['./project-information-add.component.css']
})
export class ProjectInformationAddComponent {
    projectForm = new FormGroup({
        name: new FormControl(''),
        detail: new FormControl('')
    });

    constructor(private router: Router, private projectManagementService: ProjectManagementService, private location: Location) {

    }
    
    onSubmit() {
        this.projectManagementService.addProject(this.projectForm.value).subscribe((result) => {
        });
    }

    onBack() {
        this.location.back();
    }
}