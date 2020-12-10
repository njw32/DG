import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

//page for updating and deleting discs and displaying them on their on page

@Component({
  selector: 'app-disc',
  templateUrl: './disc.page.html',
  styleUrls: ['./disc.page.scss'],
})
export class DiscPage implements OnInit {
  id: string = this.router.url.slice(6);
  disc: {} = { Name: "Disc", Manufacturer: "Manufacturer", Plastic: "Plastic", Type: "Type", Glide: "Glide", Speed: "Speed", Turn: "Turn", Fade: "Fade" };

  constructor(private router: Router, private db: AngularFirestore) { }

  async ngOnInit() {
    const res = await this.db.doc('/discs/' + this.id).ref.get();
    this.disc = res.data();
    console.log(this.disc);
  }

  deleteDisc() {
    this.db.doc('/discs/' + this.id).delete();
    this.router.navigateByUrl('/the-bag');
  }
}