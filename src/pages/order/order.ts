import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';
import { PickStationPage } from '../pick-station/pick-station';

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
  @ViewChild ("price_turbo") price_turbo;
  @ViewChild ("price_pertamax") price_pertamax;
  jumlah: number;
  data: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loading: LoadingController,
    public global: GlobalVariableProvider) {
  }

  checkOrder() {
      this.jumlah = (this.price_racing.value * 42000) + (this.price_turbo.value * 11200) +(this.price_pertamax.value * 9850);
      if (this.jumlah==0 || this.jumlah<0) {
        let alert = this.alertCtrl.create({
          title: "Keranjang Kosong!",
          message: "Ups... Anda belum memilih jumlah barang untuk dipesan.",
          buttons: ['OK']
        });
        alert.present();
      } else {
        const confirm = this.alertCtrl.create({
          title: "Lanjutkan Pembayaran?",
          message: "Total belanja Anda senilai Rp: " + (this.jumlah),
          buttons: [
            {
              text: "Batal",
              handler: () => {
                console.log("transaksi batal");
              }
            },
            {
              text: "Lanjutkan",
              handler: () => {
                console.log("lajutkan transaksi");
                this.global.harga = this.jumlah;
                this.global.jmlh_pertamax = this.price_pertamax.value;
                this.global.jmlh_racing = this.price_racing.value;
                this.global.jmlh_turbo = this.price_turbo.value;
                this.navCtrl.push(PickStationPage);
                //Query ke Database:
                //INSERT INTO datapembelian (id, jmlh_racing, jmlh_turbo, jmlh_pertamax, total_harga) 
                //VALUES ((SELECT id FROM datauser WHERE username = 'Muhamad Guntur'), 1, 0, 0, 42000);
              }
            }
          ]
        });
        confirm.present();
      }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
