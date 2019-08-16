import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // radio checked
  gender = 'male';

  // default value
  // fname = 'Ngo Trung Trong';

  // checkbox checked
  isActive = true;

  departments: Department[] = [
    { id: 1, name: 'Help Desk'},
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT'},
    { id: 4, name: 'Payroll'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(empForm: NgForm) {
    console.log(empForm.value);
    console.log(empForm);
  }
}
