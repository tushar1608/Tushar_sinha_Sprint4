import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProjectInformationAddComponent } from "./add/project-information-add.component";
import { ProjectInformationComponent } from "./search/project-information.component";
import { ProjectManagementService } from "./shared/services/project-management.service";
import { ProjectInformationUpdateComponent } from "./update/project-information-update.component";

const ROUTES = [
    { path: '', component:ProjectInformationComponent},
    { path: 'update', component: ProjectInformationUpdateComponent },
    { path: 'add', component: ProjectInformationAddComponent },
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
        ProjectManagementService
    ],
    declarations: [
        ProjectInformationComponent,
        ProjectInformationAddComponent,
        ProjectInformationUpdateComponent
    ]
}
)
export class ProjectInformationModule {}