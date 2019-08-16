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

  // select list (dropdown list) : Department
  department = '1';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(empForm: NgForm) {
    console.log(empForm.value);
    console.log(empForm);
  }
}
