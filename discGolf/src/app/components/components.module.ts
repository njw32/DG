import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoundCardsComponent } from './course-round-cards/course-round-cards.component';
import { DiscCardComponent } from './disc-card/disc-card.component';

// array of custom components
const CustomComponents =
  [
    CourseRoundCardsComponent,
    DiscCardComponent,
  ]

@NgModule({
  declarations: [CustomComponents],
  imports: [
    CommonModule
  ],
  exports: [CustomComponents],
})
export class ComponentsModule { }


// reference: https://stackoverflow.com/questions/53185901/ionic-4-custom-components