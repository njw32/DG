import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

interface Round { Date: any; Scores: string[]; CourseName: string; }

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {
  //initialize score and listOfScores per hole
  score: string = '0';
  listOfScores: string[] = [];

  //declaring the coursename and par for that course parameters from new-game user input - maybe later pulled from course api - also will pass username
  courseName: string;
  numberBaskets: number;

  constructor(private db: AngularFirestore, private actRt: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    //sets courseName and coursePar to incoming parameters
    this.courseName = this.actRt.snapshot.paramMap.get('courseName');
    this.numberBaskets = parseInt(this.actRt.snapshot.paramMap.get('numberBaskets'));
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

  previousHole() {
    this.listOfScores.pop();
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
    this.db.collection<Round>(`users/${firebase.auth().currentUser.uid}/games`).add({
      Date: new Date(),
      Scores: this.listOfScores,
      CourseName: this.courseName,
    });
    this.router.navigateByUrl("/home");
  }


}
