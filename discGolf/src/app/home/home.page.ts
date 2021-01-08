import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import firebase from 'firebase/app';
import { PopoverPageComponent } from '../components/popover-page/popover-page.component';

//TODO
//analystics and statistics for games played
//database for courses

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rounds: any[];

  courseInfo: {
    selectedName: string;
    selectedDate: string;
    selectedScore: string[];
    selectedPar: number;
  };

  constructor(
    private router: Router,
    private db: AngularFirestore,
    public popoverCtrl: PopoverController,
  ) { }


  //reading in the games in the database storing to variable this.rounds which is called in html
  async ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.db.collection(`users/${user.uid}/games`, ref => ref.orderBy('Date', "desc")).snapshotChanges().subscribe(res => {
          this.rounds = res;
        });
      } else {
        // User not logged in or has just logged out.
      }
    });


  }

  // returns the sum of number values from an array
  // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  totalShotSum(shot_array) {
    for (let i = 0; i < shot_array.length; i++) {
      shot_array[i] = parseInt(shot_array[i])
    }
    let total_sum = shot_array.reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue, 0)
    return total_sum;
  }


  // reference: https://stackoverflow.com/questions/57573043/how-to-navigate-between-pages-in-ionic-4-5
  goToCourseInfo(item) {
    let navigationExtras: NavigationExtras = item;
    this.router.navigate(['/course-round-info'], navigationExtras);
  }

  async presentPopover(ev) {
    let popover = await this.popoverCtrl.create({
      component: PopoverPageComponent,
      event: ev,
      translucent: true
    });
    popover.present();
  }
}