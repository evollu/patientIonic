import {Page} from 'ionic-angular';
import {ContactList} from '../contacts/contactList'


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ContactList;
    this.tab2Root = ContactList;
  }
}
