import { Page, NavController } from 'ionic-angular';
import { Component, ChangeDetectionStrategy } from 'angular2/core';

@Component({
	selector: 'contact-list-item',
	templateUrl: 'build/pages/contacts/contactListItem.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
	inputs: ['contact']
})
export class ContactListItem {
  contact;

  ngOnInit(){
    console.log('hello');
  }
}
