import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  valuename: string;
  valueemail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalVariableProvider) {
    this.valuename = this.global.nama_user;
    this.valueemail = this.global.email_user;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
