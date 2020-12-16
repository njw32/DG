import { Component, OnInit } from '@angular/core';
import { google } from "google-maps";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  google: google;
  lat: any;
  long: any;

  constructor() {
    // if (navigator) {
    //   navigator.geolocation.getCurrentPosition(pos => {
    //     this.long = +pos.coords.longitude;
    //     this.lat = +pos.coords.latitude;
    //   });
    // }
  }

  ngOnInit() {
  }
}

// reference: https://angular-maps.com/guides/getting-started/
// reference: https://www.codementor.io/@brijmcq/angular-display-current-location-using-google-map-fnl3tosdq
