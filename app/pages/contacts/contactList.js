import { Page, NavController } from 'ionic-angular';
import { AppStore } from '../../store'
import * as AppActions from '../../actions';

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
		// this.contacts = this.appStore.getState().contactList;
		this.unsubscribe = this.appStore.subscribe((state) => {
			this.contacts = this.appStore.getState().contactList;
		});

    let contactList = [];
    for (let i = 0; i < 5; i++) {
      contactList = contactList.concat([{
        id: i * 10 + 1,
        name: 'Black Widow',
        type: 'Avengers',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 2,
        name: 'Captain America',
        type: 'Avengers',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 3,
        name: 'Colossus',
        type: 'X-Men',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 4,
        name: 'Deadpool',
        type: 'X-Men',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 5,
        name: 'Ghost Rider',
        type: 'Marvel Knights',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 6,
        name: 'Hawkeye',
        type: 'Avengers',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 7,
        name: 'Hulk',
        type: 'Avengers',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 8,
        name: 'Human Torch',
        type: 'Fantastic Four',
        phone: '(123)-456-7890'
      }, {
        id: i * 10 + 9,
        name: 'Invisible Woman',
        type: 'Fantastic Four',
        phone: '(123)-456-7890'
      }, ]);
    }

    this.appStore.dispatch(AppActions.setContactList(contactList));
	}

	showDetail(contact) {
		let detail = Object.assign({}, contact);
		this.nav.push(ContactDetail, { contact: detail });
	}

	ngOnDestroy() {
		this.unsubscribe();
	}

}
