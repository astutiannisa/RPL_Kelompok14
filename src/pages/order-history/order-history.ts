import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GlobalVariableProvider } from '../../providers/global-variable/global-variable';

/**
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {
  public items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, public loading: LoadingController, public global: GlobalVariableProvider) {
  }

  ngOnInit() {
    var headers = new  Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    let loader = this.loading.create({
      content: 'Memuat...',
    });

    let data = {
      id: this.global.id_user
    };

    loader.present().then(()=> {
      this.http.post('http://localhost/fuelly/displayTable.php',data, options)
      .map(res => res.json())
      .subscribe(res => {
        this.items=res.server_response;
        loader.dismiss()
        console.log(res)
      });
    });
  }

  ionViewDidLoad() {
    console.log('Memuat OrderHistoryPage');
  }

}
