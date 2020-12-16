import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,

    // If I had a Google Maps API Key, it would be placed below
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
  ],
  declarations: [MapPage]
})
export class MapPageModule { }
