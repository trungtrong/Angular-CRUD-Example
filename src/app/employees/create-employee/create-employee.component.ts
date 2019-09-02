import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department';

// Config themme color
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee;
  formTitle: string;

  departments: Department[] = [
    { id: 1, name: 'Help Desk'},
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT'},
    { id: 4, name: 'Payroll'}
  ];

  datePickerConfig: Partial<BsDatepickerConfig>;

  // 10. Display and hide image of empoyee
  previewPhoto =  false;
  buttonStatus = 'Show';

  @ViewChild('employeeForm', {static: false}) public createdEmployeeForm: NgForm;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // Bai 22: edit form
    // read the route parameter of edit/1...
    this.route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    /*
    - id = 0: edit/0 => means "create form"
    => employee = default value

    - id = 1,.. : => means : edit form or update form
    */
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: 'Male',
        email: '',
        phoneNumber: null,
        dateOfBirth: null,
        department: 'null',
        isActive: false,
        photoPath: null
      };
      this.formTitle = 'Create Employee';
    } else {
      this.employee = Object.assign({}, this.employeeService.getEmployee(id));
      // print listEmployees
      console.log(this.employeeService.getEmployees());
      this.formTitle = 'Edit Employee';
    }
  }

  // submit button
  onSubmit() {
    // save data about employee
    // Way 1: using ngForm
    // this.employeeService.save(this.createdEmployeeForm.value);

    // Way 2: using ngModel
    // have to clone an Object of Employee
    const newEmployee: Employee = Object.assign({}, this.employee);
    this.employeeService.save(newEmployee);

    // reset form
    this.createdEmployeeForm.reset({
      gender: 'male',
      department: 'null',
      isActive: false
    });
  }

  // Preview Photo
  togglePreviewPhoto() {
    this.previewPhoto = !this.previewPhoto;
    this.buttonStatus =
      this.previewPhoto === true ? 'Hide' : 'Show';
  }
}
