import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { DataService } from '../shared/services/data.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.dataService
      .login(this.loginForm.value.userName, this.loginForm.value.password)
      .subscribe({
        next: (data) => {
          // noti
          this.authenticationService.setLoggedInUser(data);
          this.router.navigate(['']);
        },
        error: (err) => {
          // TODO handle login fail
        },
      });
  }
}
