import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SystemConstants } from '../common/constants';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // if (this.dataService.getLoggedInUser() && this.dataService.getLoggedInUser().AccessToken) {
    //     return true;
    // } else {
    //     this.router.navigateByUrl('auth');
    //     return false;
    // }
    // return true
    let loggedInUser = this.authService.getLoggedInUser();
    if (loggedInUser && loggedInUser.AccessToken) {
      return true;
    }
    this.router.navigateByUrl('auth');
    return false;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
