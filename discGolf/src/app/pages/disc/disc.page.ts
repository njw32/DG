import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

//page for updating and deleting discs and displaying them on their on page
interface disc {
  Name: string;
  Manufacturer: string;
  Plastic: string;
  Type: string;
  Glide: number;
  Speed: number;
  Turn: number;
  Fade: number;
  Weight: number;
}

@Component({
  selector: 'app-disc',
  templateUrl: './disc.page.html',
  styleUrls: ['./disc.page.scss'],
})

export class DiscPage implements OnInit {
  id: string = this.router.url.slice(6);
  disc: disc = { Name: "Disc", Manufacturer: "Manufacturer", Plastic: "Plastic", Type: "Type", Glide: 0, Speed: 0, Turn: 0, Fade: 0, Weight: 200 };

  discName: string;
  discManufacturer: string;
  discPlastic: string;
  discType: string;
  discGlide: number;
  discSpeed: number;
  discTurn: number;
  discFade: number;
  discWeight: number;

  constructor(private router: Router, private db: AngularFirestore) { }

  async ngOnInit() {
    const res = await this.db.doc<disc>('/discs/' + this.id).ref.get();
    this.disc = res.data();
    this.discName = this.disc.Name;
    this.discManufacturer = this.disc.Manufacturer;
    this.discPlastic = this.disc.Plastic;
    this.discType = this.disc.Type;
    this.discGlide = this.disc.Glide;
    this.discSpeed = this.disc.Speed;
    this.discTurn = this.disc.Turn;
    this.discFade = this.disc.Fade;
    this.discWeight = this.disc.Weight;
  }

  deleteDisc() {
    this.db.doc('/discs/' + this.id).delete();
    this.router.navigateByUrl('/the-bag');
  }

  editDisc() {
    this.db.doc('/discs/' + this.id).update({
      Name: this.discName,
      Manufacturer: this.discManufacturer,
      Plastic: this.discPlastic,
      Weight: this.discWeight,
      Type: this.discType,
      Speed: this.discSpeed,
      Glide: this.discGlide,
      Turn: this.discTurn,
      Fade: this.discFade
    })
    this.router.navigateByUrl('/the-bag');
  }
}