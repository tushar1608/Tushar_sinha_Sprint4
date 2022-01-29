import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Project } from "../shared/models/project.model";
import { ProjectManagementService } from "../shared/services/project-management.service";


@Component({
    templateUrl: './project-information.component.html',
    styleUrls: ['./project-information.component.css']
})
export class ProjectInformationComponent implements OnInit {
    public projects: Array<Project>;
    constructor(private router: Router, private projectManagementService: ProjectManagementService) {

    }

    ngOnInit() {
        this.projectManagementService.getAllProjects().subscribe((result: Array<Project>) => {
            this.projects = result;
            
        })
    }

    newProject() {
        this.router.navigate(['project-information/add']);
    }

    updateProject() {
        this.router.navigate(['project-information/update']);
    }
}
