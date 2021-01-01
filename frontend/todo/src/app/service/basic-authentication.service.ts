import {Injectable} from '@angular/core';
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
  ) {
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
          sessionStorage.setItem('token', basicAuthHeaderString);
          return response;
        }
      )
    );
  }
  getAuthenticatedUser = () => {
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken = () => {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }
  isUserLoggedIn = () => {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  logout = () => {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
