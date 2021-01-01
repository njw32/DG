import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Component({
  selector: 'app-the-bag',
  templateUrl: './the-bag.page.html',
  styleUrls: ['./the-bag.page.scss'],
})
export class TheBagPage implements OnInit {
  discs: any[];
  constructor(private db: AngularFirestore) { }

  async ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.db.collection(`users/${user.uid}/discs`).snapshotChanges().subscribe(res => {
          this.discs = res;
        });
      } else {
        // User not logged in or has just logged out.
      }
    });

  }
}
