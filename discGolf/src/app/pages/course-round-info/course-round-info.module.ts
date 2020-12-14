import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseRoundInfoPageRoutingModule } from './course-round-info-routing.module';

import { CourseRoundInfoPage } from './course-round-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseRoundInfoPageRoutingModule
  ],
  declarations: [CourseRoundInfoPage]
})
export class CourseRoundInfoPageModule {}
