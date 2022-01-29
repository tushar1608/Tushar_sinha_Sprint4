import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Project } from "src/modules/project/project-information/shared/models/project.model";
import { ProjectManagementService } from "src/modules/project/project-information/shared/services/project-management.service";
import { User } from "src/modules/user/user-information/shared/models/user.model";
import { UserManagementService } from "src/modules/user/user-information/shared/services/user-management.service";
import { Status } from "../shared/models/status.model";
import { Task } from "../shared/models/task.model";
import { TaskManagementService } from "../shared/services/task-management.service";

@Component({
    templateUrl: './task-information-update.component.html',
    styleUrls: ['./task-information-update.component.css']
  })
  export class TaskInformationUpdateComponent implements OnInit{
    public tasks: Array<Task>;
    public activeSelectionIndex = 0;
    updateTaskForm = new FormGroup({
        id: new FormControl(''),
        projectId: new FormControl(''),
        assignedToUserId: new FormControl(''),
        status: new FormControl(''),
        detail: new FormControl('')
    });
    projects: any[];
    users: any[];
    statuses: Status[] = new Array<Status>();
    constructor(private taskManagementService: TaskManagementService, private projectManagementService: ProjectManagementService, private userManagementService: UserManagementService, private location: Location) {
        this.projectManagementService.getAllProjects().subscribe((result:Array<Project>) => {
            this.projects = result;
        });
        this.userManagementService.getAllUsers().subscribe((result:Array<User>) => {
            this.users = result;
        });
        this.statuses.push(new Status(0, "New"));
        this.statuses.push(new Status(1, "In progress"));
        this.statuses.push(new Status(2, "Done"));
    }

    ngOnInit() {
        this.taskManagementService.getAllTasks().subscribe((result: Array<Task>) => {
            this.tasks = result;
            this.initialize();
        })
    }

    initialize() {
        this.updateTaskForm.get('id').setValue(this.tasks[this.activeSelectionIndex].id);
        this.updateTaskForm.get('projectId').setValue(this.tasks[this.activeSelectionIndex].projectId);
        this.updateTaskForm.get('status').setValue(this.tasks[this.activeSelectionIndex].status);
        this.updateTaskForm.get('assignedToUserId').setValue(this.tasks[this.activeSelectionIndex].assignedToUserId);
        this.updateTaskForm.get('detail').setValue(this.tasks[this.activeSelectionIndex].detail);
    }
    
    onUpdate() {
        this.taskManagementService.updateTask(this.updateTaskForm.value).subscribe(() => {});
        console.log(this.updateTaskForm.value)
    }

    onDelete() {
        this.taskManagementService.deleteTask(this.updateTaskForm.get('id').value).subscribe(() => {});
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
        if(this.activeSelectionIndex != this.tasks.length-1) {
            this.activeSelectionIndex++;
            this.initialize();
        }
    }
  }
  