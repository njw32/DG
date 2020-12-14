import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
})
export class ScoreBoardComponent implements OnInit {

  @Input() holeNumber: string;
  @Input() scoreValue: string;

  constructor() { }

  ngOnInit() { }

  // determines color of the card based on inputted score
  determineCardColor(scoreString) {
    if (parseInt(scoreString) > 0) {
      return "danger";
    }
    else if (parseInt(scoreString) < 0) {
      return "success";
    }
    else { return "medium"; }
  }

  // adds '1' to the index of the inputted scores
  transformHoleNum(holeString) {
    return parseInt(holeString) + 1;
  }
}
