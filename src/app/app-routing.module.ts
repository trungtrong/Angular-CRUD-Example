import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'list', component: EmployeeListComponent},
  {path: 'employees/:id', component: EmployeeDetailsComponent },
  {path: 'edit/:id', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent,
                                  CreateEmployeeComponent,
                                  EmployeeDetailsComponent];
