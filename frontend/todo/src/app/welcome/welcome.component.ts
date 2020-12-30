import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message';
  welcomeMessageFromService: string | undefined; // creates a field
  name = '';
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params[`name`];
  }
  // tslint:disable-next-line:typedef
  getWelcomeMessageWithParameter() {
    this.service. executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // this is what allows you to link to the url. As soon as you subscribe to the observable the request is executed
    // subscribe is an asynchronous call, so you can indicate what needs to be done after the data comes back
    // error defines how to handle an error
  }
  handleSuccessfulResponse: any = (response: any) => {
    this.welcomeMessageFromService = response.message;
  }
  handleErrorResponse: any = (error: any) => {
    this.welcomeMessageFromService = error.error.message;
  }
}
