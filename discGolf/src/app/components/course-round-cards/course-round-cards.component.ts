import { Component, OnInit, Input } from '@angular/core';

//component for displaying round cards

@Component({
  selector: 'app-course-round-cards',
  templateUrl: './course-round-cards.component.html',
  styleUrls: ['./course-round-cards.component.scss'],
})
export class CourseRoundCardsComponent implements OnInit {

  // initializes the inputs
  @Input() course_name: string;
  @Input() shot: number;
  @Input() date: string;

  constructor() { }

  ngOnInit() { }

}

