import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // radio checked
  gender = 'male';

  // default value
  //fname = 'Ngo Trung Trong';

  // checkbox checked
  isActive = true;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(empForm: NgForm) {
    console.log(empForm.value);
    console.log(empForm);
  }
}
