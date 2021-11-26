export class User {
  username = '';
  password = '';
  fullname = '';
  userAgent = '';
}
export class LoggedInUser {
  constructor(
    Id: string,
    UserName: string,
    FullName: string,
    AccessToken: string
  ) {
    this.Id = Id;
    this.UserName = UserName;
    this.FullName = FullName;
    this.AccessToken = AccessToken;
  }
  Id: string;
  UserName: string;
  FullName: string;
  AccessToken: string;
}
