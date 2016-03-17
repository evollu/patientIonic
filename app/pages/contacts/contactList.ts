import {
  Page,
  NavController
} from 'ionic-angular';

import {ContactDetail} from './contactDetail'

@Page({
  templateUrl: 'build/pages/contacts/contactList.html'
})
export class ContactList {

  nav: NavController;
  contacts: any[];

  constructor(nav: NavController){
    this.nav = nav;
  }

  ngOnInit() {
    this.contacts = [{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    },{
      name: 'First Last',
      type: 'Some Type',
      phone: '(123)-456-7890'
    }];
  }

  showDetail(contact){
    this.nav.push(ContactDetail, {contact: contact});
  }
}
