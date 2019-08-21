import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  // Bai 21: navagating to employees/id router and retrieve data from id of employee
  // using retrieve the parameter value from the URL
  employee: Employee;

  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployee(parseInt(id, 10));
  }
}
