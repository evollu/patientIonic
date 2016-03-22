import { Page, NavParams, NavController } from 'ionic-angular';

import { ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

import { AppStore } from '../../store'
import { saveContact } from '../../actions'

@Page({
	directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
	templateUrl: 'build/pages/contacts/contactDetail.html'
})
export class ContactDetail {
	static get parameters() {
		return [
			[NavParams],
			[NavController],
			[AppStore]
		];
	}

	constructor(params, nav, appStore) {
		this.contact = params.get('contact');
		this.appStore = appStore;
		this.nav = nav;
		this.lat = 38.8801356;
		this.lng = -77.1172381;
		this.zoom = 17;
		this.marker = {
			lat: this.lat,
			lng: this.lng,
			title: 'Evolent Health'
		}
	}

	saveContact() {
		this.contact.lastUpdated = new Date().getTime();
		this.appStore.dispatch(saveContact(this.contact));
		//this.contactService.save(this.contact);
		this.nav.pop();
	}
}
