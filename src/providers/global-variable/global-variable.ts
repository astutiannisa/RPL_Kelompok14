import { HttpClient } from '@angular/common/http';
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
  public pwd: string;
  public harga: number;
  public jmlh_racing: string;
  public jmlh_turbo: string;
  public jmlh_pertamax: string;
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
}
