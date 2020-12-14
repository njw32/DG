import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})
export class NewGamePage implements OnInit {

  constructor(private router: Router) { }

  courseName: string;
  coursePar: number;
  numberBaskets: number;

  ngOnInit() {
  }

  //submit button takes user to scorecard with form input parameters
  goToScorecard() {
    const dest = `/scorecard/${this.numberBaskets}/${this.courseName}/${this.coursePar}`;
    this.router.navigateByUrl(dest);
  }

}
