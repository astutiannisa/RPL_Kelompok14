import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

import { OrderPage } from '../order/order';
import { SettingsPage } from '../settings/settings';
import { OrderHistoryPage } from '../order-history/order-history';
/**
 * Generated class for the BerandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html',
})
export class BerandaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalVariableProvider) {
  }

  slider = [
    {
      title: "Title 1",
      description: "Description 1",
      image: "assets/imgs/logo.png"
    },

    {
      title: "Title 2",
      description: "Description 2",
      image: "assets/imgs/logo.png"
    },

    {
      title: "Title 3",
      description: "Description 3",
      image: "assets/imgs/logo.png"
    }
  ];

  goto_OrderHistory() {
    this.navCtrl.push(OrderHistoryPage);
  }

  goto_Order() {
    this.navCtrl.push(OrderPage);
  }

  goto_Settings() {
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad() {
    console.log('Memuat BerandaPage');
  }

}
