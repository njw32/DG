import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.page.html',
  styleUrls: ['./disc.page.scss'],
})
export class DiscPage implements OnInit {
  id: string;

  constructor(private router: Router, private db: AngularFirestore) { }

  ngOnInit() {
    this.id = this.router.url.slice(6);
    this.db.collection('discs').doc(this.id).ref.get().then(function (doc) {
      if (doc.exists) {
        console.log(doc.data());
      } else {
        console.log('no doc');
      }
    }).catch(function (error) {
      console.log(error);
    });


  }
}
