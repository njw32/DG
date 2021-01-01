import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';


@Component({
  selector: 'app-new-disc',
  templateUrl: './new-disc.page.html',
  styleUrls: ['./new-disc.page.scss'],
})
export class NewDiscPage implements OnInit {

  discName: string;
  discManufacturer: string;
  discPlastic: string;
  discType: string;
  discSpeed: number;
  discGlide: number;
  discTurn: number;
  discFade: number;
  discWeight: number = null;

  constructor(private db: AngularFirestore, private router: Router) {
  }

  ngOnInit() {
  }

  submitDisc() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.db.collection(`users/${user.uid}/discs`).add({
          Name: this.discName,
          Manufacturer: this.discManufacturer,
          Plastic: this.discPlastic,
          Type: this.discType,
          Speed: this.discSpeed,
          Glide: this.discGlide,
          Turn: this.discTurn,
          Fade: this.discFade,
          Weight: this.discWeight,
        });
        this.router.navigateByUrl('/the-bag');
      } else {
        // User not logged in or has just logged out.
      }
    });


  }
}
