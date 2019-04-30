import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  @ViewChild ("price_racing") price_racing;
  @ViewChild ("price_trubo") price_turbo;
  @ViewChild ("price_pertamax") price_pertamax;
  jumlah: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private http: Http, public loading: LoadingController) {
  }

  checkOrder() {
      
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
