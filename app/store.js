import { createStore } from 'redux';

import * as AppActions from './actions';

const initialState = {
	contactList: []
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
    case AppActions.SET_CONTACT_LIST:
      let contactList = [...action.contactList];
      return {
        ...state,
        contactList: contactList
      }
		default:
			return state;
	}
};

export class AppStore {
	constructor() {
		return createStore(reducer);
	}
}
