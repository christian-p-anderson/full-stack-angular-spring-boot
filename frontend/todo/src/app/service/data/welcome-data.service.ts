import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}
// create class to show what you are expecting back

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
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  // tslint:disable-next-line:typedef
  executeHelloWorldServiceWithPathVariable(name: any) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
