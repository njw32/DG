import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
    console.log('Authguard.canActivate(): hello');
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          console.log('user is logged in');
          resolve(true);
        } else {
          console.log('user is not logged in');
          this.router.navigateByUrl('login');
          console.log('should be at login');
          resolve(false);
        }
      })
    })
  }

}
