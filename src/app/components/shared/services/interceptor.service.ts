import { Router } from '@angular/router';
import { SystemConstants } from './../common/constants';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from './data.service';
import { HttpStatusCode } from '../common/constants';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthenticationService,
    private dataService: DataService,
    private router: Router
  ) {}
  handleError(error: HttpErrorResponse) {
    console.log('InterceptorService:', error);
    if (error.status === HttpStatusCode.UNAUTHORIZED) {
      // auto navigate to login if 401 response returned from api
      this.router.navigateByUrl('auth');
    }
    return throwError(() => new Error(error.message));
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf(SystemConstants.LOGIN_API) > 0) {
      return next
        .handle(req)
        .pipe(
          catchError((error: HttpErrorResponse) => this.handleError(error))
        );
    }
    if (req.url.indexOf(environment.authPath) > 0) {
      return next.handle(req);
    }
    const authToken = this.authService.getLoggedInUser()?.AccessToken;
    if (!authToken) {
      return next
        .handle(req)
        .pipe(
          catchError((error: HttpErrorResponse) => this.handleError(error))
        );
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
      withCredentials: true,
    });
    return next
      .handle(authReq)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     console.log('AuthInterceptor');

  //     if (req.url.indexOf(config.auth.authUrl) > 0) {
  //       return next.handle(req);
  //     }

  //     const authToken = this.auth.getAuthorizationToken();
  //     // the HttpRequest and HttpResponse instance properties are readonly
  //     // The clone() method's hash argument allows you to mutate specific properties of the request while copying the others.
  //     const authReq = req.clone({headers: req.headers.set('Authorization', authToken), withCredentials: true});
  //     return next.handle(authReq);
  //   }
}
