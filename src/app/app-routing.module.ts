import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';


const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'list', component: EmployeeListComponent},
  {path: 'create', component: CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent,
                                  CreateEmployeeComponent];
