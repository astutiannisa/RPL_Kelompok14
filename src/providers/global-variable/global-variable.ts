import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the GlobalVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVariableProvider {
  public id_user: string;
  public nama_user: string;
  public email_user: string;
  public alamat: string;
  public pwd: string;
  public harga: number;
  public jmlh_racing: number;
  public jmlh_turbo: number;
  public jmlh_pertamax: number;
  data:string;
  email:string;
  password:string;
  items:any;

  constructor(public http: Http) {
    console.log('Hello GlobalVariableProvider Provider');
  }

  getID() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      email: this.email_user,
      password: this.pwd
    };

    this.http.post('http://localhost/fuelly/getID.php', data, options)
    .map(res => res.text())
    .subscribe(res => {
      console.log(res)
      this.id_user=res;
   });
  }

  getNAME() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      email: this.email_user,
      password: this.pwd
    };

    this.http.post('http://localhost/fuelly/getNAME.php', data, options)
    .map(res => res.text())
    .subscribe(res => {
      console.log(res)
      this.nama_user=res;
   });
  }

  getAlamat() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let data = {
      email: this.email_user,
      password: this.pwd
    };

    this.http.post('http://localhost/fuelly/getALAMAT.php', data, options)
    .map(res => res.text())
    .subscribe(res => {
      console.log(res)
      this.alamat=res;
   });
  }
}
