import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private authSvc: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.authSvc.loginUser(this.email, this.password)
      this.router.navigateByUrl('home')
    } catch (error) {
      console.log(error);
    }
  }

  async createAccount(): Promise<void> {
    try {
      await this.authSvc.signupUser(this.email, this.password);
      this.router.navigateByUrl('home')
    } catch (error) {
      console.log(error);
    }
  }

  resetPassword(): void {
    if (!this.email) {
      console.log('ALERT')
    }
    this.authSvc.resetPassword(this.email);
  }

}
