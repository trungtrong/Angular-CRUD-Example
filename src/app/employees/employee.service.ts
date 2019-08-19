import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
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
      email: 'mary@pragimtech.com',
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
      email: 'john@pragimtech.com',
      phoneNumber: 5432978640,
      dateOfBirth: '3/25/1976',
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/HinhNen.jpg'
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
