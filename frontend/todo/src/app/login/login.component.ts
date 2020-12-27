import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleLogin() {
    console.log(this.username);
    console.log(this.password);
  }
}
// Three kinds of data binding
// 1. Interpolation where we tie a component property to a view element
// 2. Event binding - where we tie a user event to a event which is defined to something in the .component.ts file
// 3. Two-Way data binding implemented using [(ngModel)] - whatever value is presented to the component property is tied to the
// view element and what ever data is entered in the view element is automatically tied back to the component property
