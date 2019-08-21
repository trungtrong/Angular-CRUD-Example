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
  onSelect(employeeId: number) {
    this.router.navigate(['/employees', employeeId]);
  }
}
