import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }
  // tslint:disable-next-line:typedef
  executeHelloWorldBeanService() {
    console.log('Execute Hello World Bean Service');
  }
}
