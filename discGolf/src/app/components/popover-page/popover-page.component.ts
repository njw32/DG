import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover-page',
  templateUrl: './popover-page.component.html',
  styleUrls: ['./popover-page.component.scss'],
})
export class PopoverPageComponent implements OnInit {

  constructor(private router: Router, public viewCtrl: PopoverController) { }

  ngOnInit() { }


  logout() {
    console.log('logout');
    this.router.navigateByUrl('login');
    this.viewCtrl.dismiss();
  }

  goToStatistics() {
    console.log('statistics');
  }
}
