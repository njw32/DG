import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface Round { Date: any; Scores: string[]; CourseName: string; CoursePar: number; }

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {
  //initialize score and listOfScores per hole
  score: string = '0';
  listOfScores: string[] = [];

  //declaring the coursename and par for that course - will later be implemented by user and maybe even pulled from api
  courseName: string = "Garfield Park";
  coursePar: number = 27;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
  }

  //functions for increase, decrease, next buttons on the page
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

  nextHole() {
    this.listOfScores.push(this.score);
    this.score = "0";
  }

  //used to dynamically style the colors green and red
  getScoreClass(): string {
    if (parseInt(this.score) < 0) {
      return "under";
    }
    if (parseInt(this.score) > 0) {
      return "over";
    }
  }

  //submit function - writes to db
  submitCard() {
    console.log("submitted");
    this.db.collection<Round>("games").add({
      Date: new Date(),
      Scores: this.listOfScores,
      CourseName: this.courseName,
      CoursePar: this.coursePar,
    });
  }


}
