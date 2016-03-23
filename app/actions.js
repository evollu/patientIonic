export const SAVE_CONTACT = 'SAVE_CONTACT';
export const SET_CONTACT_LIST = 'SET_CONTACT_LIST';

export function saveContact(contact) {
	return {
		type: SAVE_CONTACT,
		contact
	}
}

export function setContactList(contactList){
  return {
    type: SET_CONTACT_LIST,
    contactList
  }
}
