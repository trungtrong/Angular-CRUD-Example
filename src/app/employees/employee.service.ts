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
      phoneNumber: 2345978640,
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

  // Bai 21: navagating to employees/id router and retrieve data from id of employee

  // using  this method to provide the employee data at a specific "id"
  getEmployee(id: number): Employee {
    return this.listEmployees.find(elem => elem.id === id);
  }

  save(employee: Employee) {
    /* id = null: from "CREATE" form
     */
    if (employee.id === null) {
      // Step 1: find the max id in listEmployee
      const maxId = this.listEmployees.length;
      // Step 2: add the new id for new employee
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      /* id != null => from "Update" form
        we update data of this employee with current id again
       */
      // find if employee.id is exist
        const foundIndex =
              this.listEmployees.findIndex(e => e.id === employee.id);
        this.listEmployees[foundIndex] = employee;
    }
  }
}
