import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rounds: any[];
  constructor(
    private db: AngularFirestore,
  ) { }

  //reading in the games in the database storing to variable this.rounds which is called in html
  // async ngOnInit() {
  //   this.db.collection('games', ref => ref.orderBy('Date')).valueChanges().subscribe(res => {
  //     this.rounds = res;
  //     console.log(this.rounds);
  //   });
  // }
  async ngOnInit() {
    this.db.collection('games').snapshotChanges().subscribe(res => {
      this.rounds = res;
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
}


