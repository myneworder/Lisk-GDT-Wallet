import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { AccountDataProvider } from '../../providers/account-data/account-data';
import { EditContactModalPage } from '../edit-contact-modal/edit-contact-modal';

/**
 * Generated class for the ContactsMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts-menu',
  templateUrl: 'contacts-menu.html',
})
export class ContactsMenuPage {
  account;
  name;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,  public modalCtrl: ModalController,  public accountData: AccountDataProvider) {
  	this.account = navParams.get('account');
  	this.name = navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsMenuPage');
  }

  removeContact(removedAccount) {
    this.accountData.removeContact(removedAccount).then(() => {
      // this.loadContacts();
      this.viewCtrl.dismiss();
    });
  }

  editContact(name:string, account:string) {
    let myModal = this.modalCtrl.create(EditContactModalPage, { name: name, account: account });
    myModal.present();
    myModal.onDidDismiss(data => {
      // this.loadContacts();
      this.viewCtrl.dismiss();
    });
  }

}
