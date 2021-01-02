import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';


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

  constructor(private alertCtrl: AlertController, private router: Router, private db: AngularFirestore) {
  }
  async ngOnInit() {
    //get information to display current information on form
    const res = await this.db.doc<disc>(`users/${firebase.auth().currentUser.uid}/discs/${this.id}`).ref.get();
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

  async deleteDisc() {
    const alert = await this.alertCtrl.create({
      message: `Delete ${this.discName} from your bag?`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.db.doc(`users/${firebase.auth().currentUser.uid}/discs/${this.id}`).delete();
            this.router.navigateByUrl('/the-bag');
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

  async editDisc() {
    const alert = await this.alertCtrl.create({
      message: `Confirm changes to ${this.discName}?`,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.db.doc(`users/${firebase.auth().currentUser.uid}/discs/${this.id}`).update({
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
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }
}