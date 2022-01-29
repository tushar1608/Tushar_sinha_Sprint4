import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProjectManagementService } from "src/modules/project/project-information/shared/services/project-management.service";
import { UserManagementService } from "src/modules/user/user-information/shared/services/user-management.service";
import { TaskInformationAddComponent } from "./add/task-information-add.component";
import { TaskInformationComponent } from "./search/task-information.component";
import { TaskManagementService } from "./shared/services/task-management.service";
import { TaskInformationUpdateComponent } from "./update/task-information-update.component";

const ROUTES = [
    { path: '', component:TaskInformationComponent},
    { path: 'update', component: TaskInformationUpdateComponent },
    { path: 'add', component: TaskInformationAddComponent },
];
@NgModule(
{
    imports: [
        RouterModule.forChild(ROUTES),
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers:[
        TaskManagementService,
        ProjectManagementService,
        UserManagementService
    ],
    declarations: [
        TaskInformationComponent,
        TaskInformationAddComponent,
        TaskInformationUpdateComponent
    ]
}
)
export class TaskInformationModule {}