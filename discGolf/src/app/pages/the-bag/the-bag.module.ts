import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheBagPageRoutingModule } from './the-bag-routing.module';

import { TheBagPage } from './the-bag.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheBagPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TheBagPage]
})
export class TheBagPageModule { }
