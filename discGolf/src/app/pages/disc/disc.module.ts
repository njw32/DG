import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscPageRoutingModule } from './disc-routing.module';

import { DiscPage } from './disc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscPageRoutingModule
  ],
  declarations: [DiscPage]
})
export class DiscPageModule {}
