import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


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
  discWeight: number;

  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  submitDisc() {
    this.db.collection("discs").add({
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
  }
}
