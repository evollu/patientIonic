import { createStore } from 'redux';

import * as AppActions from './actions';

let contactList = [];
for (let i = 0; i < 100; i++) {
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

const initialState = {
	contactList: contactList
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case AppActions.SAVE_CONTACT:
			let newList = [...state.contactList];
			for (let i = 0; i < newList.length; i++) {
				if (newList[i].id === action.contact.id) {
					newList[i] = action.contact;
					break;
				}
			}
			return {
				...state,
				contactList: newList
			};
		default:
			return state;
	}
};

export class AppStore {
	constructor() {
		return createStore(reducer);
	}
}
