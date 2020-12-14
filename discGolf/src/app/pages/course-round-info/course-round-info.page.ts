import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

interface round {
  CourseName: string;
  CoursePar: number;
  Date: string;
  Scores: string[];
}


@Component({
  selector: 'app-course-round-info',
  templateUrl: './course-round-info.page.html',
  styleUrls: ['./course-round-info.page.scss'],
})

export class CourseRoundInfoPage implements OnInit {

  id: string = this.router.url.slice(6);
  round: round = { CourseName: "CourseName", CoursePar: 0, Date: "December 1, 1970 at 20:00:00 PM UTC-5", Scores: [] };

  roundName: string;
  roundPar: number;
  roundDate: string;
  roundScores: string[];

  constructor(private router: Router, private db: AngularFirestore) { }

  async ngOnInit() {
    const res = await this.db.doc<round>('/games/' + this.id).ref.get();
    this.round = res.data();
    this.roundName = this.round.CourseName;
    this.roundPar = this.round.CoursePar;
    this.roundDate = this.round.Date;
    this.roundScores = this.round.Scores;
  }

}
