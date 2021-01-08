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
    this.router.navigateByUrl('login');
    this.viewCtrl.dismiss();
  }

  goToStatistics() {
    this.router.navigateByUrl('statistics');
    this.viewCtrl.dismiss();
  }

  dismissPopover() {
    this.viewCtrl.dismiss();
  }
}
