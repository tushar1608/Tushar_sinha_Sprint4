import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserInformationAddComponent } from "./add/user-information-add.component";
import { UserInformationComponent } from "./search/user-information.component";
import { UserManagementService } from "./shared/services/user-management.service";
import { UserInformationUpdateComponent } from "./update/user-information-update.component";
const ROUTES = [
    { path: '', component: UserInformationComponent},
    { path: 'update', component: UserInformationUpdateComponent },
    { path: 'add', component: UserInformationAddComponent },
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
        UserManagementService
    ],
    declarations: [
        UserInformationComponent,
        UserInformationUpdateComponent,
        UserInformationAddComponent
    ]
}
)
export class UserInformationModule {}