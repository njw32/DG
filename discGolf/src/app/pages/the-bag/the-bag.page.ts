import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-the-bag',
  templateUrl: './the-bag.page.html',
  styleUrls: ['./the-bag.page.scss'],
})


export class TheBagPage implements OnInit {

  disc_bag: any[];
  constructor(
    private db: AngularFirestore,
  ) { }


  //reading in the discs in the database storing to variable this.disc_bag which is called in html
  async ngOnInit() {
    this.db.collection('discs', ref => ref.orderBy('Name')).valueChanges().subscribe(res => {
      this.disc_bag = res;
      console.log(this.disc_bag);
    });
  }

}
