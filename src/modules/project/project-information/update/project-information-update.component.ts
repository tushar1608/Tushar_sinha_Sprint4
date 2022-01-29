import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Project } from "../shared/models/project.model";
import { ProjectManagementService } from "../shared/services/project-management.service";

@Component({
    templateUrl: './project-information-update.component.html',
    styleUrls: ['./project-information-update.component.css']
  })
  export class ProjectInformationUpdateComponent implements OnInit{
    public projects: Array<Project>;
    public activeSelectionIndex = 0;
    updateProjectForm = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        detail: new FormControl('')
    });
    constructor(private projectManagementService: ProjectManagementService, private location: Location) {
        
    }

    ngOnInit() {
        this.projectManagementService.getAllProjects().subscribe((result: Array<Project>) => {
            this.projects = result;
            this.initialize();
        })
    }

    initialize() {
        this.updateProjectForm.get('id').setValue(this.projects[this.activeSelectionIndex].id);
        this.updateProjectForm.get('name').setValue(this.projects[this.activeSelectionIndex].name);
        this.updateProjectForm.get('detail').setValue(this.projects[this.activeSelectionIndex].detail);
        
    }
    
    onUpdate() {
        this.projectManagementService.updateUser(this.updateProjectForm.value).subscribe(() => {});
        console.log(this.updateProjectForm.value)
    }

    onDelete() {
        this.projectManagementService.deleteUser(this.updateProjectForm.get('id').value).subscribe(() => {});
        this.next();
    }

    onBack() {
        this.location.back();
    }

    prev() {
        if(this.activeSelectionIndex != 0) {
            this.activeSelectionIndex--;
            this.initialize();
        }
    }

    next() {
        if(this.activeSelectionIndex != this.projects.length-1) {
            this.activeSelectionIndex++;
            this.initialize();
        }
    }
  }
  