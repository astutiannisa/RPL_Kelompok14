import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { RegisterPage } from '../register/register';
import { BerandaPage } from '../beranda/beranda';
import { PickStationPage } from '../pick-station/pick-station';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("email") email;
  @ViewChild("password") password;
  data:string;
  items:any;

  constructor(public navCtrl: NavController , public alertCtrl: AlertController, 
    private http: Http, public loading: LoadingController, public toastCtrl: ToastController,
    public global: GlobalVariableProvider) { 
  }

  tes() {
    this.navCtrl.push(PickStationPage);
  }

  signUp() {
    this.navCtrl.push(RegisterPage);
  }

  signIn() {
    if(this.email.value=="" || this.password.value=="") {
      let alert = this.alertCtrl.create({
        title: "Attention",
        subTitle: "Username or Password field is empty",
        buttons: ['OK']
      });
      alert.present();
    } else {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });

      let data = {
        email: this.email.value,
        password: this.password.value
      };

      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {
        this.http.post('http://localhost/fuelly/login.php', data, options)
        .map(res => res.text())
        .subscribe(res => {
          console.log(res)
          loader.dismiss()
          if (res=='1') {
            let alert = this.alertCtrl.create({
              title: "Login Successfull",
              subTitle: "Berhasil Masuk",
              buttons: ['OK']
            });
            alert.present();
            this.global.email_user=this.email.value;
            this.global.pwd=this.password.value; 
            this.navCtrl.setRoot(BerandaPage);

            //fetch user_id dan nama_user
            this.global.getNAME();
            this.global.getID();
          } else {
            let alert = this.alertCtrl.create({
              title: "Login Invalid!",
              subTitle: "Username atau Password salah",
              buttons: ['OK']
            });
            alert.present();
          }
        });
       });
      }
      
    }
  }
