import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
})
export class ScoreBoardComponent implements OnInit {

  @Input() holeNumber: number;
  @Input() scoreValue: number;
  @Input() scoreColor: string;



  constructor() { }

  ngOnInit() { }



}
