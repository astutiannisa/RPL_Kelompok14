import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderPage } from '../order/order';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  goto_Order() {
    this.navCtrl.push(OrderPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

}
