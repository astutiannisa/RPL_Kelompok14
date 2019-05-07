import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

import { BerandaPage } from '../beranda/beranda';
import { WaitOrderPage } from '../wait-order/wait-order';
/**
 * Generated class for the PickStationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pick-station',
  templateUrl: 'pick-station.html',
})  
export class PickStationPage {
  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public platform: Platform, public http: HttpClient,
     public alertCtrl: AlertController) {
    }

  payment() {
    const confirm = this.alertCtrl.create({
      title: "Lanjutkan Pembayaran?",
      message: "Untuk saat ini pembayaran hanya melalui Cash-On-Delivery, lanjutkan?",
      buttons: [
        {
          text: "Batal",
          handler: () => {
            console.log("transaksi batal");
            this.navCtrl.setRoot(BerandaPage);
          }
        },
        {
          text: "Lanjutkan",
          handler: () => {
            this.navCtrl.push(WaitOrderPage);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    let data:Observable<any>;
    data = this.http.get('https://raw.githubusercontent.com/MGunturG/JSONKu/master/db.json')
    data.subscribe(result => {
      this.items = result;
      console.log(result);
    })
  }
 }
