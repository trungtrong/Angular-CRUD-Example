import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() notifyDelete = new EventEmitter<number>();
  confirmDelete = false;

  constructor(private router: Router,
              private _employeeService: EmployeeService) { }

  ngOnInit() {
  }

  // Bai 21: router
  viewEmployee() {
    this.router.navigate(['/employees', this.employee.id]);
  }


  // Bai 22: edit form
  editEmployee() {
    this.router.navigate(['/edit', this.employee.id]);
  }

  // Bai 23: delete form
  deleteEmployee() {
    // provide id for service
    this._employeeService.deleteEmployee(this.employee.id);
    // provide id of employee that is deleted for employee-list(its parent)
    this.notifyDelete.emit(this.employee.id);
  }

}
