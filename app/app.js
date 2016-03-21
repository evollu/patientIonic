///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { IonicApp, App, Platform, ActionSheet } from 'ionic-angular';
import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

import { ContactList } from './pages/contacts/contactList';

import { ContactService } from './pages/contacts/contactService';


@App({
	templateUrl: 'build/app.html',
	config: {}, // http://ionicframework.com/docs/v2/api/config/Config/,
	providers: [ContactService, ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class MyApp {
	static get parameters() {
		return [
			[Platform],
			[IonicApp]
		];
	}

	constructor(platform, app) {
		this.app = app;
		this.contactListPage = ContactList;

		platform.ready().then(() => {
			// The platform is now ready. Note: if this callback fails to fire, follow
			// the Troubleshooting guide for a number of possible solutions:
			//
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			//
			// First, let's hide the keyboard accessory bar (only works natively) since
			// that's a better default:
			//
			// Keyboard.setAccessoryBarVisible(false);
			//
			// For example, we might change the StatusBar color. This one below is
			// good for dark backgrounds and light text:
			// StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
		});
	}

	openPage(page) {
		let nav = this.app.getComponent('nav');
		nav.setRoot(page);
	}

	showActionSheet() {
		let actionSheet = ActionSheet.create({
			title: 'Modify your album',
			buttons: [{
				text: 'Destructive',
				role: 'destructive',
				handler: () => {
					console.log('Destructive clicked');
				}
			}, {
				text: 'Archive',
				handler: () => {
					console.log('Archive clicked');
				}
			}, {
				text: 'Cancel',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		let nav = this.app.getComponent('nav');
		nav.present(actionSheet);
	}
}
