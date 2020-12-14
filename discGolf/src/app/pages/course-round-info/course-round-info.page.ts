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
  item: any;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()) {
      this.item = this.router.getCurrentNavigation().extras;
    }
  }

  async ngOnInit() {
    this.selectedDate = this.item.Date.toDate();

  }

  scoreBySection() {
    let numSections = this.item.Scores.length / 9;



  }

}
