import { EventEmitter, Injectable } from 'angular2/core';

@Injectable()
export class ContactService {

	constructor() {
    this.observable = new EventEmitter();
  	this.contactList = [];
		for (let i = 0; i < 100; i++) {
			this.contactList = this.contactList.concat([{
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
	}

	getList() {
		return this.contactList;
	}

	getObservable() {
		return this.observable;
	}

	save(contact) {
		this.contactList = [].concat(this.contactList);
		for (let i = 0; i < this.contactList.length; i++) {
			if (this.contactList[i].id === contact.id) {
				this.contactList[i] = contact;
				break;
			}
		}
		this.observable.next(this.contactList);
	}
}
