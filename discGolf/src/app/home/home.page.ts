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
  async ngOnInit() {
    this.db.collection('games', ref => ref.orderBy('Date')).valueChanges().subscribe(res => {
      this.rounds = res;
      console.log(this.rounds);
    });
  }
}