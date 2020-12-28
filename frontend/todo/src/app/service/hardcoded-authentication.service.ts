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
      return true;
    }
    return false;
  }
}
