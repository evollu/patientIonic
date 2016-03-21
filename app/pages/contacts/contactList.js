import { Page, NavController } from 'ionic-angular';

import { ContactService } from './contactService';

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
			[ContactService]
		];
	}
	constructor(nav, contactService) {
		this.nav = nav;
		this.contactService = contactService;
	}

  ngOnInit(){
		this.contacts = this.contactService.getList();
		this.contactService.getObservable().subscribe(list => this.contacts = list);
  }

	showDetail(contact) {
		let detail = Object.assign({}, contact);
		this.nav.push(ContactDetail, { contact: detail });
	}

}
