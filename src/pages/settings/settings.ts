import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';
import 'rxjs/add/operator/map';
import { BerandaPage } from '../beranda/beranda';
import { HomePage } from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  valuename: string;
  valueemail: string;
  valuealamat: string;
  valueid: string;
  @ViewChild ("email") email;
  @ViewChild ("username") username;
  @ViewChild ("password") password;
  @ViewChild ("alamat") alamat;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalVariableProvider, public alertCtrl: AlertController,
    public loading: LoadingController, public http: Http) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.valuename = this.global.nama_user;
    this.valueemail = this.global.email_user;
    this.valuealamat = this.global.alamat;
  }

  logOut() {
    this.navCtrl.setRoot(HomePage);
  }

  saveProfile() {
    if (this.password.value=="") {
      let alert = this.alertCtrl.create({
        title: "Attention",
        subTitle: "There is a empty field, please isi lah!",
        buttons: ['OK']
      });
      alert.present();
    } else {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type','application/json');
      let options = new RequestOptions({
        headers: headers
      });
      
      let data = {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        id: this.global.id_user
      };

      let loader = this.loading.create({
        content: "Memperbarui data....",
      });

      loader.present().then(() => {
        this.http.post('http://localhost/fuelly/updateUser.php', data, options)
        .map(res => res.text())
        .subscribe(res => {
          loader.dismiss()
          if (res) {
            let alert = this.alertCtrl.create({
              title: "Hore!!!",
              subTitle: "Data kamu sudah diperbarui!1",
              buttons: ['OK']
            });
            alert.present();
            console.log(this.username.value);
            console.log(this.email.value);
            //console.log(this.password.value);
            this.global.getNAME();
            this.global.getID();
            this.navCtrl.setRoot(BerandaPage);
          } else {
            let alert = this.alertCtrl.create({
              title: "Ups...",
              subTitle: "Yah... Pembaruan Gagal!",
              buttons: ['OK']
            });
            alert.present();
          }
         });
       });  
      }
  }

}
