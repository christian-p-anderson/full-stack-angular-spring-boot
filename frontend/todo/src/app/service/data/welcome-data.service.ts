import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  // Angular has HttpClient - this will allow us to communicate to java backend
  constructor(
    private http: HttpClient
  ) { }
  // tslint:disable-next-line:typedef
  executeHelloWorldBeanService() {
    return this.http.get('http://localhost:8080/hello-world-bean');
    // console.log('Execute Hello World Bean Service');
  }
}
