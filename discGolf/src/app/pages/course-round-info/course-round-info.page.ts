import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-course-round-info',
  templateUrl: './course-round-info.page.html',
  styleUrls: ['./course-round-info.page.scss'],
})

export class CourseRoundInfoPage implements OnInit {
  selectedDate: Date;
  roundInfo: any;

  constructor(private alertCtrl: AlertController, private router: Router, private db: AngularFirestore) {
    if (this.router.getCurrentNavigation()) {
      this.roundInfo = this.router.getCurrentNavigation().extras;
      console.log(this.roundInfo.payload.doc.id);
    }
  }

  async ngOnInit() {
    this.selectedDate = this.roundInfo.payload.doc.data().Date.toDate();
  }

  scoreBySection() {
    let numSections = this.roundInfo.payload.doc.data().Scores.length / 9;
  }

  async deleteRound() {
    const alert = await this.alertCtrl.create({
      message: `Delete this round from your history?`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.db.doc(`users/${firebase.auth().currentUser.uid}/games/${this.roundInfo.payload.doc.id}`).delete();
            this.router.navigateByUrl('home');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        },
      ],
    });
    alert.present();
  }

  totalShotSum(shot_array) {
    for (let i = 0; i < shot_array.length; i++) {
      shot_array[i] = parseInt(shot_array[i])
    }
    let total_sum = shot_array.reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue, 0)
    return total_sum;
  }
}
