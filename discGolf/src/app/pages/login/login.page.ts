import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string = localStorage.getItem("email");
  password: string = localStorage.getItem("pass");
  constructor(private alertCtrl: AlertController, private authSvc: AuthService, private router: Router, public loadingCrtl: LoadingController, private db: AngularFirestore) {
  }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.authSvc.loginUser(this.email.trim(), this.password.trim());
      localStorage.setItem("email", this.email.trim());
      localStorage.setItem("pass", this.password.trim());
      this.router.navigateByUrl('home');
    } catch (error) {
      //error alert
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

  //create account alert with small form
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
            this.createAccount(data.email, data.password);
          }
        }
      ]
    });
    alert.present();
  }

  //create account connects with firebase
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


  async resetPassword() {
    console.log("resetting");
    const alert = await this.alertCtrl.create({
      header: "Reset Password",
      inputs: [
        {
          name: "email",
          placeholder: 'sample@mail.com',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Reset',
          handler: data => {
            this.authSvc.resetPassword(data.email);
            this.displayConfimation();
          }
        }
      ]
    });
    alert.present();
  }
  async displayConfimation() {
    const alert = await this.alertCtrl.create({
      message: 'Check your email for password reset link',
      buttons: [{
        text: 'Ok',
        role: 'cancel'
      }],
    });
    alert.present();
  }
}
