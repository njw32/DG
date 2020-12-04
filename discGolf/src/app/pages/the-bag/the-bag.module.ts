import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TheBagPage } from './the-bag.page';

import { TheBagPageRoutingModule } from './the-bag-routing.module';
import { ComponentsModule } from '../../components/components.module';


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
