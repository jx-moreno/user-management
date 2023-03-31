import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'', component:HomeComponent},
    {path:'users', component:UserComponent},
    {path:'reports', component:ReportsComponent},
    {path:'create-user', component:CreateUserComponent},
    {path:'edit-user/:id', component:EditUserComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
