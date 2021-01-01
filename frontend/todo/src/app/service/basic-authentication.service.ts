import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

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
      `${API_URL}/basicauth`, {
        headers
      }
    ).pipe( // pipe method says if it succeeds do this
      map(
        response => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return response;
        }
      )
    );
  }
  getAuthenticatedUser = () => {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken = () => {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }
  isUserLoggedIn = () => {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout = () => {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
