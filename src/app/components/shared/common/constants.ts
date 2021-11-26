import { environment } from 'src/environments/environment';

export class UIStateConstants {
  public static Signin = 'form-signin';
  public static Signup = 'form-signup';
  public static ResetPass = 'form-reset';
}

export class SystemConstants {
  public static CURRENT_USER = 'CUR_USER';
  public static BASE_API = environment.baseApi;
  public static LOGIN_API = 'api/v1/users/login';
}
export enum HttpStatusCode {
  UNKNOWN = 0,
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}
