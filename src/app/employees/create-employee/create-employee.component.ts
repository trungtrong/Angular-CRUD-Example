import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department';

// Config themme color
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

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
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  onSubmit(newEmployee: Employee) {
    console.log(newEmployee);
  }

  // Preview Photo
  togglePreviewPhoto() {
    this.previewPhoto = !this.previewPhoto;
    this.buttonStatus =
      this.previewPhoto === true ? 'Hide' : 'Show';
  }
}
