import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: 'user-information', loadChildren: () =>
    import('src/modules/user/user-information/user-information.module')
    .then(m => m.UserInformationModule)
  },
  {
    path: 'project-information', loadChildren: () =>
    import('src/modules/project/project-information/project-information.module')
    .then(m => m.ProjectInformationModule)
  },
  {
    path: 'task-information', loadChildren: () =>
    import('src/modules/task/task-information/task-infomration.module')
    .then(m => m.TaskInformationModule)
  },
  {
    path: "**", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
