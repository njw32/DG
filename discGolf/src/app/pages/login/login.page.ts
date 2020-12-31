import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private alertCtrl: AlertController, private authSvc: AuthService, private router: Router, public loadingCrtl: LoadingController) {
  }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.authSvc.loginUser(this.email, this.password)
      this.router.navigateByUrl('home');
    } catch (error) {
      console.log(error);
      const alert = await this.alertCtrl.create({
        message: error,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }],
      });
      alert.present();
    }
  }

  async createAccountPop() {
    const alert = await this.alertCtrl.create({
      header: 'CREATE NEW ACCOUNT',
      inputs: [
        {
          name: 'email',
          placeholder: 'sample@mail.com'
        },
        {
          name: 'password',
          placeholder: 'password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create Account',
          handler: data => {
            this.createAccount(data.email, data.password)
          }
        }
      ]
    });
    alert.present();
  }

  async createAccount(email: string, password: string): Promise<void> {
    try {
      await this.authSvc.signupUser(email, password);
      this.router.navigateByUrl('home')
    } catch (error) {
      const alert = await this.alertCtrl.create({
        message: error,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }],
      });
      alert.present();
    }
  }

  resetPassword(): void {
    if (!this.email) {
      console.log('ALERT')
    }
    this.authSvc.resetPassword(this.email);
  }

}
