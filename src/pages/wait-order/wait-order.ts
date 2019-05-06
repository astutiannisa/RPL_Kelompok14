import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { BerandaPage } from '../beranda/beranda';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';
/**
 * Generated class for the WaitOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wait-order',
  templateUrl: 'wait-order.html',
})
export class WaitOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private http: Http, public loading: LoadingController,
    public global: GlobalVariableProvider) {
  }

  finishOrder(){
    const confirm = this.alertCtrl.create({
      title: "Selesaikan Transaksi",
      message: "Apakah barang sudah diterima?",
      buttons: [
        {
          text: "Batalkan Pesanan",
          handler: () => {
            console.log("transaksi batal");
            this.navCtrl.setRoot(BerandaPage);
          }
        },
        {
          text: "Barang Sudah Diterima",
          handler: () => {
            //query ke database
            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type','application/json');
            let options = new RequestOptions({
              headers: headers
           });
      
      let data = {
        username: this.global.nama_user,
        total_harga: this.global.harga
      };

      let loader = this.loading.create({
        content: "Memuat...",
      });

      loader.present().then(() => {
        this.http.post('http://localhost/fuelly/updateTable.php', data, options)
        .map(res => res.text())
        .subscribe(res => {
          loader.dismiss()
          
            let alert = this.alertCtrl.create({
              title: "Transaksi Selesai!",
              subTitle: "Anda akan dialihkan langsung ke Beranda",
              buttons: ['OK']
            });
            alert.present();
          
         });
       }); 
            this.navCtrl.setRoot(BerandaPage);
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaitOrderPage');
  }

}
