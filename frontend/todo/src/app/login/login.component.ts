import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Dependency Injection - a built in feature that can be used for routing

  constructor(private router: Router,
              // private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) {
  }

  // in typescript if you pass something as a constructor argument then by default this makes it available as a member variable

  ngOnInit(): void {
  }

  // handleLogin = () => {
  //   if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
  //     this.router.navigate(['welcome', this.username]); // This line redirects to the Welcome
  //     // page, need to pass router through the Constructor
  //     // navigate indicates the page you want to route into
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //   }
  // }
  handleBasicAuthLogin = () => {
      // console.log(this.username);
      // if(this.username==="in28minutes" && this.password === 'dummy') {
      this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        );
    }
}

// Three kinds of data binding
// 1. Interpolation where we tie a component property to a view element
// 2. Event binding - where we tie a user event to a event which is defined to something in the .component.ts file
// 3. Two-Way data binding implemented using [(ngModel)] - whatever value is presented to the component property is tied to the
// view element and what ever data is entered in the view element is automatically tied back to the component property
