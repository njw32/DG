import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoundCardsComponent } from './course-round-cards/course-round-cards.component';

// array of custom components
const CustomComponents =
  [
    CourseRoundCardsComponent,
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