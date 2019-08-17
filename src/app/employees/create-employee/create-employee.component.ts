import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department';

// Config themme color
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // radio checked
  gender = 'male';

  // default value
  // fullName = 'Ngo Trung Trong';

  // checkbox checked
  isActive = true;

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

  onSubmit(empForm: NgForm) {
    console.log(empForm.value);
    console.log(empForm);
  }

  togglePreviewPhoto() {
    this.previewPhoto = !this.previewPhoto;
    this.buttonStatus =
      this.previewPhoto === true ? 'Hide' : 'Show';
  }
}
