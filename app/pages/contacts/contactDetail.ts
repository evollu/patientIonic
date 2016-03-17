import {
  Page,
  NavParams
} from 'ionic-angular';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Page({
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS],
  templateUrl: 'build/pages/contacts/contactDetail.html'
})
export class ContactDetail {
  contact: any;
  lat;
  lng;
  zoom;
  marker;

  constructor(params: NavParams){
    this.contact = params.get('contact');
    this.lat = 38.8801356;
    this.lng = -77.1172381;
    this.zoom = 17;
    this.marker = {
      lat: this.lat,
      lng: this.lng,
      title: 'Evolent Health'
    }
  }
}
