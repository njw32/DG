import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseRoundInfoPage } from './course-round-info.page';

const routes: Routes = [
  {
    path: '',
    component: CourseRoundInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoundInfoPageRoutingModule { }
