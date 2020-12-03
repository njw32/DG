import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDiscPageRoutingModule } from './new-disc-routing.module';

import { NewDiscPage } from './new-disc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDiscPageRoutingModule
  ],
  declarations: [NewDiscPage]
})
export class NewDiscPageModule {}
