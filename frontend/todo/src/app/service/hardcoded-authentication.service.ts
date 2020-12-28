import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// @Injectable makes this a service class
export class HardcodedAuthenticationService {

  constructor() { }
  // tslint:disable-next-line:typedef
  authenticate(username: string, password: string) {
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username); // stores information in browser's session storage
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
}
