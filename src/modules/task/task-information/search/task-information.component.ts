import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Task } from "../shared/models/task.model";
import { TaskManagementService } from "../shared/services/task-management.service";


@Component({
    templateUrl: './task-information.component.html',
    styleUrls: ['./task-information.component.css']
})
export class TaskInformationComponent implements OnInit {
    public tasks: Array<Task>;
    public status = {
        1: "New",
        2: "In progress",
        3: "Done"
    }
    constructor(private router: Router, private taskManagementService: TaskManagementService) {

    }

    ngOnInit() {
        this.taskManagementService.getAllTasks().subscribe((result: Array<Task>) => {
            this.tasks = result;
            console.log(this.tasks)
        })
    }

    newTask() {
        this.router.navigate(['task-information/add']);
    }

    updateTask() {
        this.router.navigate(['task-information/update']);
    }
}
