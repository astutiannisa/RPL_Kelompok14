import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild ("email") email;
  @ViewChild ("username") username;
  @ViewChild ("password") password;
  @ViewChild ("alamat") alamat;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private http: Http, public loading: LoadingController) {
  }

  Register() {
    if (this.username.value == "" || this.password.value == "" || this.username.value == "") {
      let alert = this.alertCtrl.create({
        title: "Data Tidak Valid",
        subTitle: "Mohon masukan data dengan benar.",
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
        alamat: this.alamat.value
      };

      let loader = this.loading.create({
        content: "Mendaftarkan diri...",
      });

      loader.present().then(() => {
        this.http.post('http://localhost/fuelly/register.php', data, options)
        .map(res => res.text())
        .subscribe(res => {
          loader.dismiss()
          console.log(res)
          if (res == "1") {
            let alert = this.alertCtrl.create({
              title: "Registrasi Berhasil!",
              subTitle: "Silakan masuk dengan akun baru mu!",
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(HomePage);
          } else {
            let alert = this.alertCtrl.create({
              title: "Ups...",
              subTitle: "Pendaftaran gagal! Alamat email sudah terdaftar.",
              buttons: ['OK']
            });
            alert.present();
          }
         });
       });  
      }
    }
  }
