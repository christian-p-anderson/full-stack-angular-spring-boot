import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}

// create class to show what you are expecting back

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  // Angular has HttpClient - this will allow us to communicate to java backend
  constructor(
    private http: HttpClient
  ) {
  }

  // tslint:disable-next-line:typedef
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  // Step 77
  // tslint:disable-next-line:typedef
  executeHelloWorldServiceWithPathVariable(name: any) {
    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      {
        headers
      });
  }

  // tslint:disable-next-line:typedef
  createBasicAuthenticationHttpHeader() {
    const username = 'in28minutes';
    const password = 'dummy';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

//  Access to XMLHttpRequest at
//  http://localhost:8080/hello-world/path-variable/in28minutes
}
