import { Page, NavController } from 'ionic-angular';
import { AppStore } from '../../store'

import { ContactDetail } from './contactDetail';

import { ContactListItem } from './contactListItem';

@Page({
	templateUrl: 'build/pages/contacts/contactList.html',
	directives: [ContactListItem]
})
export class ContactList {
	static get parameters() {
		return [
			[NavController],
			[AppStore]
		];
	}
	constructor(nav, appStore) {
		this.nav = nav;
		this.appStore = appStore;
	}

	ngOnInit() {
		// this.contacts = this.contactService.getList();
		// this.contactService.getObservable().subscribe(list => this.contacts = list);
		this.contacts = this.appStore.getState().contactList;
		this.unsubscribe = this.appStore.subscribe((state) => {
			this.contacts = this.appStore.getState().contactList;
		});
	}

	showDetail(contact) {
		let detail = Object.assign({}, contact);
		this.nav.push(ContactDetail, { contact: detail });
	}

	ngOnDestroy() {
		this.unsubscribe();
	}

}
