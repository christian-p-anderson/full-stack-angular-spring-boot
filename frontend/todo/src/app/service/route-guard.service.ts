import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {HardcodedAuthenticationService} from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    return false;
  }
}
