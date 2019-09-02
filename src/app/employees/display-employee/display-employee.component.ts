import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private router: Router) { }

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


}
