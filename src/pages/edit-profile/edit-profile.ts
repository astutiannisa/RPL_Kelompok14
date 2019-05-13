import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalVariableProvider,
    public alertCtrl: AlertController) {
    this.valuename = this.global.nama_user;
    this.valueemail = this.global.email_user;
  }

  removeAccount() {
    const confirm = this.alertCtrl.create({
      title: "Menghapus Akun",
      message: "Kamu yakin ingin menghapus akun mu? Ini akan menghapus seluruh data kamu.",
      buttons: [{
        text: "Jangan Hapus",
        handler: () => {
          console.log("tidak jadi");
        }
      },
      {
        text: "Ya, Hapus",
        handler: () => {
          console.log("jadi");
        }
      }
    ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
