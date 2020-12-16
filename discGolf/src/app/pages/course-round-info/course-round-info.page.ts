import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-round-info',
  templateUrl: './course-round-info.page.html',
  styleUrls: ['./course-round-info.page.scss'],
})

export class CourseRoundInfoPage implements OnInit {
  selectedDate: Date;
  roundInfo: any;

  // retrieve the info from the "home" page card
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()) {
      this.roundInfo = this.router.getCurrentNavigation().extras;
    }
  }

  // apply the proper date format
  async ngOnInit() {
    this.selectedDate = this.roundInfo.Date.toDate();
  }

  // finds the sum of all the shots
  totalShotSum(shot_array) {
    for (let i = 0; i < shot_array.length; i++) {
      shot_array[i] = parseInt(shot_array[i])
    }
    let total_sum = shot_array.reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue, 0)
    return total_sum;
  }
}
