import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {

  score: string = '0';
  listOfScores: string[] = [];

  constructor() {
  }


  ngOnInit() {
  }

  increaseScore() {
    if (this.score.charAt(0) === "+") {
      this.score = this.score.slice(1)
    }
    this.score = (parseInt(this.score) + 1).toString();
    if (parseInt(this.score) > 0) {
      this.score = "+" + this.score;
    }
  }

  decreaseScore() {
    if (this.score.charAt(0) === "+") {
      this.score = this.score.slice(1)
    }
    this.score = (parseInt(this.score) - 1).toString();
    if (parseInt(this.score) > 0) {
      this.score = "+" + this.score;
    }
  }

  getScoreClass(): string {
    if (parseInt(this.score) < 0) {
      return "under";
    }
    if (parseInt(this.score) > 0) {
      return "over";
    }
  }

  nextHole() {
    this.listOfScores.push(this.score);
    this.score = "0";
  }


}
