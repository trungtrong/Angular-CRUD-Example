import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: '10/25/1988',
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/HinhNen.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: '11/20/1979',
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/HinhNen.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: '3/25/1976',
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/HinhNen.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
