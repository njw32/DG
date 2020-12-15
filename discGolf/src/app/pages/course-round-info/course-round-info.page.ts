import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-round-info',
  templateUrl: './course-round-info.page.html',
  styleUrls: ['./course-round-info.page.scss'],
})

export class CourseRoundInfoPage implements OnInit {
  selectedDate: Date;
  roundInfo: any;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()) {
      this.roundInfo = this.router.getCurrentNavigation().extras;
    }
  }

  async ngOnInit() {
    this.selectedDate = this.roundInfo.Date.toDate();

  }

  scoreBySection() {
    let numSections = this.roundInfo.Scores.length / 9;

  }

  totalShotSum(shot_array) {
    for (let i = 0; i < shot_array.length; i++) {
      shot_array[i] = parseInt(shot_array[i])
    }
    let total_sum = shot_array.reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue, 0)
    return total_sum;
  }
}
