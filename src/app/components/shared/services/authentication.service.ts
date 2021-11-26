import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, LoggedInUser } from '../common-models/user.model';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { SystemConstants } from '../common/constants';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private headers: HttpHeaders;
  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ) {
    this.headers = new HttpHeaders().append('Content-Type', 'application/json');
  }
  public isRefreshing = false;
  public $tokenRefresh: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  setLoggedInUser(user: any) {
    if (user) {
      localStorage.setItem(
        SystemConstants.CURRENT_USER,
        JSON.stringify(
          new LoggedInUser(
            user.user._id,
            user.user.username,
            user.user.fullname,
            user.token
          )
        )
      );
    } else {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
    }
  }
  getLoggedInUser(): LoggedInUser | undefined {
    const userRaw = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (!userRaw) {
      return;
    }
    return JSON.parse(userRaw) as LoggedInUser;
  }

  logout() {
    this.dataService.get('/api/v1/users/logout?mode=all').subscribe();
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.router.navigateByUrl('auth');
  }

  refresh() {
    return this.http
      .post(
        SystemConstants.BASE_API + '/api/v1/users/refresh',
        { userAgent: navigator.userAgent },
        { headers: { ...this.headers }, withCredentials: true }
      )
      .subscribe((res: any) => {
        console.log(res);
        this.setLoggedInUser(res.user);
      });
  }
}
