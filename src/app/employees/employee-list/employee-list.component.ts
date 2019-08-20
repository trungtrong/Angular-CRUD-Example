import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';

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

  // tslint:disable-next-line: variable-name
  private _searchTerm: string;

  // We are binding to this property in the NgModel directive
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    // shadow employees array
    this.filteredEmployees = this.employees;
  }

  filterEmployees(searchString: string) {
    // Using employees array to filter
    // purpose: employees is consistent with all employees
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
  }

  changeEmployeeName() {
    this.employees[0].name = 'Jordan';
    // apply filter logic
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
  }
}
