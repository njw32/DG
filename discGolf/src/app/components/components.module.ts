import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoundCardsComponent } from './course-round-cards/course-round-cards.component';
import { DiscCardComponent } from './disc-card/disc-card.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

// array of custom components
const CustomComponents =
  [
    CourseRoundCardsComponent,
    DiscCardComponent,
    ScoreBoardComponent,
  ]

@NgModule({
  declarations: [CustomComponents],
  imports: [
    CommonModule
  ],
  exports: [CustomComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }


// reference: https://stackoverflow.com/questions/53185901/ionic-4-custom-components