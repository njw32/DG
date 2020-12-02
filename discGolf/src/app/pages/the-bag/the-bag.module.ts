import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheBagPageRoutingModule } from './the-bag-routing.module';

import { TheBagPage } from './the-bag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheBagPageRoutingModule
  ],
  declarations: [TheBagPage]
})
export class TheBagPageModule {}
