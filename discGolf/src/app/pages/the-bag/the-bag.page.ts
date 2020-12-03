import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-the-bag',
  templateUrl: './the-bag.page.html',
  styleUrls: ['./the-bag.page.scss'],
})
export class TheBagPage implements OnInit {
  discs: any[];
  constructor(private db: AngularFirestore) { }

  async ngOnInit() {
    this.db.collection('discs').valueChanges().subscribe(res => {
      this.discs = res;
      console.log(this.discs);
    });
  }
}
