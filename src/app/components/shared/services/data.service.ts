import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, LoggedInUser } from '../common-models/user.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SystemConstants } from '../common/constants';
import { Router } from '@angular/router';
@Injectable()
export class DataService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().append('Content-Type', 'application/json');
  }

  login(username: string, password: string) {
    return this.http.post<any>(
      SystemConstants.BASE_API + '/api/v1/users/login',
      { username, password, userAgent: navigator.userAgent }
    );
  }

  getImage(uri: string, data: Object) {
    return this.http.get(uri, data);
  }

  get(uri: string) {
    return this.http.get(SystemConstants.BASE_API + uri, {
      headers: this.headers,
    });
  }

  post(uri: string, data?: any) {
    return this.http.post(SystemConstants.BASE_API + uri, data, {
      headers: this.headers,
    });
  }
  put(uri: string, data?: any) {
    return this.http.put(SystemConstants.BASE_API + uri, data, {
      headers: this.headers,
    });
  }
  delete(uri: string, key: string, id: string) {
    return this.http.delete(
      SystemConstants.BASE_API + uri + '/?' + key + '=' + id,
      { headers: this.headers }
    );
  }
}
