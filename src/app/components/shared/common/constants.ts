import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeSquare, faKeyboard, faMouse, faStepForward, faStop } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { cusGoto, cusNotify, cusText } from './custom-icon';

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

export class ActionTypes {
  public static CLICK = 'CLICK';
  public static SEND_KEY = 'SEND_KEY';
  public static SEND_TEXT = 'SEND_TEXT';
  public static GOTO = 'GOTO';
  public static WARNING = 'WARNING';
  public static EMAIL = 'EMAIL';
  public static NOTIFY = 'NOTIFY';
  public static NEXT = 'NEXT';
  public static END = 'END';
}

export interface ActionTypeOption {
  id: string,
  name: string,
  star: boolean,
  icon: IconDefinition,
}

export const ActionTypeOptions: ActionTypeOption[] = [
  { id: ActionTypes.CLICK, name: 'Click', star: true, icon: faMouse },
  { id: ActionTypes.SEND_KEY, name: 'Send Key', star: true, icon: faKeyboard },
  { id: ActionTypes.SEND_TEXT, name: 'Send Text', star: true, icon: cusText },
  { id: ActionTypes.GOTO, name: 'Go to', star: true, icon: cusGoto },
  { id: ActionTypes.WARNING, name: 'Warning', star: false, icon: faBell },
  { id: ActionTypes.EMAIL, name: 'Email', star: false, icon: faEnvelopeSquare },
  { id: ActionTypes.NOTIFY, name: 'Notify To Mobile App', star: false, icon: cusNotify },
  { id: ActionTypes.NEXT, name: 'Next', star: false, icon: faStepForward },
  { id: ActionTypes.END, name: 'End', star: false, icon: faStop },
]
