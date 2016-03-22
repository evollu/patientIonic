export const SAVE_CONTACT = 'SAVE_CONTACT';

export function saveContact(contact) {
	return {
		type: SAVE_CONTACT,
		contact
	}
}
