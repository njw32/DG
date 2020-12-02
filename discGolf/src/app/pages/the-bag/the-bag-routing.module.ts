import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheBagPage } from './the-bag.page';

const routes: Routes = [
  {
    path: '',
    component: TheBagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheBagPageRoutingModule {}
