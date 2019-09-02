import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  // data filtering in Angular component
  // using it to print fitlered list once we type in search field
  filteredEmployees: Employee[];

  // Bai 20 filter
  // tslint:disable-next-line: variable-name
  private _searchTerm: string;

  // Bai 20 filter
  // We are binding to this property in the NgModel directive
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);

    // console.log(this.employees);
    // console.log(this.filteredEmployees);
  }

  // Bai 20 filter
  filterEmployees(searchString: string) {
    // Using employees array to filter
    // purpose: employees is consistent with all employees
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
  }

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    // Bai 20 filter
    // shadow employees array
    this.filteredEmployees = this.employees;
  }

  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === id);

    if (i !== -1) {
      this.filteredEmployees.splice(i, 1);
    }
    //console.log(this.filteredEmployees);
  }
}
