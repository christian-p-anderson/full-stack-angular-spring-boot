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
    this.name = this.route.snapshot.params.name;
  }
  // tslint:disable-next-line:typedef
  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    // this is what allows you to link to the url. As soon as you subscribe to the observable the request is executed
    // subscribe is an asynchronous call, so you can indicate what needs to be done after the data comes back
  }
  handleSuccessfulResponse: any = (response: any) => {
    this.welcomeMessageFromService = response.message;
  }
}
