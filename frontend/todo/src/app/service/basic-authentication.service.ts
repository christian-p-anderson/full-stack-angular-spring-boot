import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {HelloWorldBean} from './data/welcome-data.service';

@Injectable({
  providedIn: 'root'
})
// @Injectable makes this a service class
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }
  authenticate = (username: string, password: string) => {
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username); // stores information in browser's session storage
      return true;
    }
    return false;
  }
  executeAuthenticationService = (username: string, password: string) => {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`, {
        headers
      }
      ).pipe( // pipe method says if it succeeds do this
        map(
          response => {
            sessionStorage.setItem('authenticatedUser', username);
            return response;
          }
        )
    );
  }
  isUserLoggedIn = () => {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  logout = () => {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
