webpackJsonp([8],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_variable_global_variable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pick_station_pick_station__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, alertCtrl, loading, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.global = global;
    }
    OrderPage.prototype.checkOrder = function () {
        var _this = this;
        this.jumlah = (this.price_racing.value * 42000) + (this.price_turbo.value * 11200) + (this.price_pertamax.value * 9850);
        if (this.jumlah == 0 || this.jumlah < 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Keranjang Kosong!",
                message: "Ups... Kamu belum memilih jumlah barang untuk dipesan.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var confirm_1 = this.alertCtrl.create({
                title: "Lanjutkan Pembayaran?",
                message: "Total belanja Anda senilai Rp: " + (this.jumlah),
                buttons: [
                    {
                        text: "Batal",
                        handler: function () {
                            console.log("Transaksi Batal");
                        }
                    },
                    {
                        text: "Lanjutkan",
                        handler: function () {
                            console.log("Transaksi Lanjut");
                            _this.global.harga = _this.jumlah;
                            _this.global.jmlh_pertamax = _this.price_pertamax.value;
                            _this.global.jmlh_racing = _this.price_racing.value;
                            _this.global.jmlh_turbo = _this.price_turbo.value;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pick_station_pick_station__["a" /* PickStationPage */]);
                            //Query ke Database:
                            //INSERT INTO datapembelian (id, jmlh_racing, jmlh_turbo, jmlh_pertamax, total_harga) 
                            //VALUES ((SELECT id FROM datauser WHERE username = 'Muhamad Guntur'), 1, 0, 0, 42000);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('Memuat OrderPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("price_racing"),
        __metadata("design:type", Object)
    ], OrderPage.prototype, "price_racing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("price_turbo"),
        __metadata("design:type", Object)
    ], OrderPage.prototype, "price_turbo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("price_pertamax"),
        __metadata("design:type", Object)
    ], OrderPage.prototype, "price_pertamax", void 0);
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/order/order.html"*/`<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pesan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img src="img/nin-live.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        Pertamax Racing\n        </ion-card-title>\n      <p>\n        Harga Rp 42.000\n      </p>\n      <br>\n      <p>Pesan sebanyak: </p>\n      <ion-item>\n          <ion-input class="ion-input" placeholder="0" type="number" clearInput=\'true\' min="0" name="price_racing" #price_racing></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="img/nin-live.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        Pertamax Turbo\n        </ion-card-title>\n      <p>\n        Harga Rp 11.200\n      </p>\n      <br>\n      <p>Pesan sebanyak: </p>\n      <ion-item>\n          <ion-input class="ion-input" placeholder="0" type="number" clearInput=\'true\' min="0" name="price_turbo" #price_turbo></ion-input>\n      </ion-item>\n      \n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="img/nin-live.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        Pertamax 92\n        </ion-card-title>\n      <p>\n        Harga Rp 9.850\n      </p>\n      <br>\n      <p>Pesan sebanyak: </p>\n\n      <ion-item>\n          <ion-input class="ion-input" placeholder="0" type="number" clearInput=\'true\' min="0" name="price_pertamax" #price_pertamax></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar  >\n    <button ion-button block (click)="checkOrder()">Pesan Sekarang!</button>\n  </ion-toolbar>\n</ion-footer>`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickStationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beranda_beranda__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wait_order_wait_order__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PickStationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PickStationPage = (function () {
    function PickStationPage(navCtrl, navParams, platform, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    PickStationPage.prototype.payment = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Lanjutkan Pembayaran?",
            message: "Untuk saat ini pembayaran hanya melalui Cash-On-Delivery, lanjutkan?",
            buttons: [
                {
                    text: "Batal",
                    handler: function () {
                        console.log("Transaksi Batal");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__beranda_beranda__["a" /* BerandaPage */]);
                    }
                },
                {
                    text: "Lanjutkan",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wait_order_wait_order__["a" /* WaitOrderPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    PickStationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var data;
        data = this.http.get('https://raw.githubusercontent.com/MGunturG/JSONKu/master/db.json');
        data.subscribe(function (result) {
            _this.items = result;
            console.log(result);
        });
    };
    PickStationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pick-station',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/pick-station/pick-station.html"*/`<!--\n  Generated template for the PickStationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dari mana Bensin Anda Dikirim?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let item of items" (click)="payment()">\n      {{item.title}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/pick-station/pick-station.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PickStationPage);
    return PickStationPage;
}());

//# sourceMappingURL=pick-station.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beranda_beranda__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_variable_global_variable__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WaitOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WaitOrderPage = (function () {
    function WaitOrderPage(navCtrl, navParams, alertCtrl, http, loading, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.global = global;
    }
    WaitOrderPage.prototype.finishOrder = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Selesaikan Transaksi",
            message: "Apakah barang sudah diterima?",
            buttons: [
                {
                    text: "Batalkan Pesanan",
                    handler: function () {
                        console.log("transaksi batal");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__beranda_beranda__["a" /* BerandaPage */]);
                    }
                },
                {
                    text: "Barang Sudah Diterima",
                    handler: function () {
                        //query ke database
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                            headers: headers
                        });
                        var data = {
                            username: _this.global.nama_user,
                            jmlh_racing: _this.global.jmlh_racing,
                            jmlh_turbo: _this.global.jmlh_turbo,
                            jmlh_pertamax: _this.global.jmlh_pertamax,
                            total_harga: _this.global.harga
                        };
                        var loader = _this.loading.create({
                            content: "Memuat...",
                        });
                        loader.present().then(function () {
                            _this.http.post('http://localhost/fuelly/updateTable.php', data, options)
                                .map(function (res) { return res.text(); })
                                .subscribe(function (res) {
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: "Transaksi Selesai!",
                                    subTitle: "",
                                    buttons: ['OK']
                                });
                                alert.present();
                            });
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__beranda_beranda__["a" /* BerandaPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    WaitOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaitOrderPage');
    };
    WaitOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wait-order',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/wait-order/wait-order.html"*/`<!--\n  Generated template for the WaitOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Order Tracking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar  >\n      <button ion-button block (click)="finishOrder()">Selesaikan Transaksi</button>\n    </ion-toolbar>\n  </ion-footer>`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/wait-order/wait-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], WaitOrderPage);
    return WaitOrderPage;
}());

//# sourceMappingURL=wait-order.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    RegisterPage.prototype.Register = function () {
        var _this = this;
        if (this.username.value == "" || this.password.value == "" || this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "Data Tidak Valid",
                subTitle: "Mohon masukan data dengan benar.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                email: this.email.value,
                password: this.password.value,
                alamat: this.alamat.value
            };
            var loader_1 = this.loading.create({
                content: "Mendaftarkan diri...",
            });
            loader_1.present().then(function () {
                _this.http.post('http://localhost/fuelly/register.php', data_1, options_1)
                    .map(function (res) { return res.text(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    console.log(res);
                    if (res == "1") {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Registrasi Berhasil!",
                            subTitle: "Silakan masuk dengan akun baru mu!",
                            buttons: ['OK']
                        });
                        alert_2.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                    else {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Ups...",
                            subTitle: "Pendaftaran gagal! Alamat email sudah terdaftar.",
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("alamat"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "alamat", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/register/register.html"*/`<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buat Akun Baru</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n    <form #f="ngForm">\n        <ion-item>\n            <ion-input type="text" placeholder="Nama Lengkap" name="username" #username></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-input round type="text" placeholder="Email" name="email" #email="ngModel" ngModel email></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-input type="text" placeholder="Alamat" name="alamat" #alamat></ion-input>\n          </ion-item>\n      \n            <div padding>\n                <p>*Jangan gunakan kata sandi kartu kredit Anda atau kata sandi penting lainnya, karena kami tidak peduli dengan enkripsi data.</p>\n            </div>\n      \n          <ion-item>\n            <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n          </ion-item>\n\n          <div padding>\n              <button ion-button round outline block [disabled]="!f.valid" (click)="Register()">Daftar</button>\n            </div>\n    </form>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_variable_global_variable__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderHistoryPage = (function () {
    function OrderHistoryPage(navCtrl, navParams, http, loading, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.global = global;
    }
    OrderHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var loader = this.loading.create({
            content: 'Memuat...',
        });
        var data = {
            id: this.global.id_user
        };
        loader.present().then(function () {
            _this.http.post('http://localhost/fuelly/displayTable.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.items = res.server_response;
                loader.dismiss();
                console.log(res);
            });
        });
    };
    OrderHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('Memuat OrderHistoryPage');
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-history',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/order-history/order-history.html"*/`<!--\n  Generated template for the OrderHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Riwayat Pembelian</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{item.harga}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/order-history/order-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());

//# sourceMappingURL=order-history.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/beranda/beranda.module": [
		683,
		7
	],
	"../pages/edit-profile/edit-profile.module": [
		684,
		0
	],
	"../pages/order-history/order-history.module": [
		685,
		6
	],
	"../pages/order/order.module": [
		686,
		5
	],
	"../pages/pick-station/pick-station.module": [
		687,
		4
	],
	"../pages/register/register.module": [
		688,
		3
	],
	"../pages/settings/settings.module": [
		689,
		2
	],
	"../pages/wait-order/wait-order.module": [
		690,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network_ngx__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_beranda_beranda__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_order__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pick_station_pick_station__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wait_order_wait_order__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_order_history_order_history__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_global_variable_global_variable__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_beranda_beranda__["a" /* BerandaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pick_station_pick_station__["a" /* PickStationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wait_order_wait_order__["a" /* WaitOrderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_order_history_order_history__["a" /* OrderHistoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/beranda/beranda.module#BerandaPageModule', name: 'BerandaPage', segment: 'beranda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-history/order-history.module#OrderHistoryPageModule', name: 'OrderHistoryPage', segment: 'order-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pick-station/pick-station.module#PickStationPageModule', name: 'PickStationPage', segment: 'pick-station', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wait-order/wait-order.module#WaitOrderPageModule', name: 'WaitOrderPage', segment: 'wait-order', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_beranda_beranda__["a" /* BerandaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pick_station_pick_station__["a" /* PickStationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_wait_order_wait_order__["a" /* WaitOrderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_order_history_order_history__["a" /* OrderHistoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network_ngx__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GlobalVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalVariableProvider = (function () {
    function GlobalVariableProvider(http) {
        this.http = http;
        //console.log('Hello GlobalVariableProvider Provider');
    }
    GlobalVariableProvider.prototype.getID = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            email: this.email_user,
            password: this.pwd
        };
        this.http.post('http://localhost/fuelly/getID.php', data, options)
            .map(function (res) { return res.text(); })
            .subscribe(function (res) {
            //console.log(res)
            _this.id_user = res;
        });
    };
    GlobalVariableProvider.prototype.getNAME = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            email: this.email_user,
            password: this.pwd
        };
        this.http.post('http://localhost/fuelly/getNAME.php', data, options)
            .map(function (res) { return res.text(); })
            .subscribe(function (res) {
            //console.log(res)
            _this.nama_user = res;
        });
    };
    GlobalVariableProvider.prototype.getAlamat = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            email: this.email_user,
            password: this.pwd
        };
        this.http.post('http://localhost/fuelly/getALAMAT.php', data, options)
            .map(function (res) { return res.text(); })
            .subscribe(function (res) {
            //console.log(res)
            _this.alamat = res;
        });
    };
    GlobalVariableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GlobalVariableProvider);
    return GlobalVariableProvider;
}());

//# sourceMappingURL=global-variable.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BerandaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_variable_global_variable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_history_order_history__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the BerandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BerandaPage = (function () {
    function BerandaPage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.slider = [
            {
                title: "Title 1",
                description: "Description 1",
                image: "assets/imgs/logo.png"
            },
            {
                title: "Title 2",
                description: "Description 2",
                image: "assets/imgs/logo.png"
            },
            {
                title: "Title 3",
                description: "Description 3",
                image: "assets/imgs/logo.png"
            }
        ];
    }
    BerandaPage.prototype.goto_OrderHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__order_history_order_history__["a" /* OrderHistoryPage */]);
    };
    BerandaPage.prototype.goto_Order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_order__["a" /* OrderPage */]);
    };
    BerandaPage.prototype.goto_Settings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    BerandaPage.prototype.ionViewDidLoad = function () {
        console.log('Memuat BerandaPage');
    };
    BerandaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beranda',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/beranda/beranda.html"*/`<!--\n  Generated template for the BerandaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="light">\n    <ion-title text-center>\n      Dashboard\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <section text-center>\n    <ion-icon name="person"></ion-icon>\n    <h1 style="font-size: 1.4em" no-margin>Selamat Datang, {{global.nama_user}}</h1>\n  </section>\n    \n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slider">\n      <img [src]="slide.image"/>\n      <h2 [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card text-center padding color="danger" (click)="goto_Order()">\n          <ion-icon name="people"></ion-icon>\n          <h2>Pesan Bensin Sekarang!</h2>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12>\n          <ion-card text-center padding color="danger" (click)="goto_OrderHistory()">\n            <ion-icon name="people"></ion-icon>\n            <h2>Riwayat Pembelian</h2>\n          </ion-card>\n        </ion-col>\n\n        <ion-col col-12>\n            <ion-card text-center padding color="danger" (click)="goto_Settings()">\n              <ion-icon name="people"></ion-icon>\n              <h2>Pengaturan</h2>\n            </ion-card>\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/beranda/beranda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], BerandaPage);
    return BerandaPage;
}());

//# sourceMappingURL=beranda.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beranda_beranda__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_variable_global_variable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, http, loading, toastCtrl, global) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.global = global;
    }
    HomePage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.signIn = function () {
        var _this = this;
        if (this.email.value == "" || this.password.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "Data Tidak Valid",
                subTitle: "Alamat email atau kata sandi kosong.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                email: this.email.value,
                password: this.password.value
            };
            var loader_1 = this.loading.create({
                content: 'Mohon tunggu...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://localhost/fuelly/login.php', data_1, options_1)
                    .map(function (res) { return res.text(); })
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == '1') {
                        _this.global.email_user = _this.email.value;
                        _this.global.pwd = _this.password.value;
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__beranda_beranda__["a" /* BerandaPage */]);
                        //fetch user_id dan nama_user
                        _this.global.getNAME();
                        _this.global.getID();
                        _this.global.getAlamat();
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Gagal Masuk",
                            subTitle: "Email atau kata sandi salah!",
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/home/home.html"*/`<ion-content padding>\n  <ion-list>\n    <form #f="ngForm">\n      <ion-item margin-vertical>\n        <ion-label floating>Email</ion-label>\n        <ion-input round type="text" placeholder="Email" name="email" #email="ngModel" ngModel email></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input round type="password" placeholder="Password" name="password" #password></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <button ion-button round block [disabled]="!f.valid" (click)="signIn()">Masuk</button>\n      </ion-item>\n  \n      <ion-item>\n        <button ion-button color="light" round block (click)="signUp()">Daftar Baru</button>\n      </ion-item>\n    </form>\n  </ion-list>\n  \n</ion-content>\n`/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_variable_global_variable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beranda_beranda__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, global, alertCtrl, loading, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.http = http;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        this.valuename = this.global.nama_user;
        this.valueemail = this.global.email_user;
        this.valuealamat = this.global.alamat;
    };
    SettingsPage.prototype.removeAccount = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Menghapus Akun",
            message: "Kamu yakin ingin menghapus akun mu? Ini akan menghapus seluruh data kamu.",
            buttons: [{
                    text: "Jangan Hapus",
                    handler: function () {
                        console.log("tidak jadi");
                    }
                },
                {
                    text: "Ya, Hapus",
                    handler: function () {
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                            headers: headers
                        });
                        var data = {
                            email: _this.global.email_user,
                            id: _this.global.id_user
                        };
                        var loader = _this.loading.create({
                            content: "Menghapus data....",
                        });
                        loader.present().then(function () {
                            _this.http.post('http://localhost/fuelly/hapusAkun.php', data, options)
                                .map(function (res) { return res.text(); })
                                .subscribe(function (res) {
                                loader.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                            });
                        });
                        console.log("jadi");
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage.prototype.logOut = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        console.log("Berhasil Logout");
    };
    SettingsPage.prototype.saveProfile = function () {
        var _this = this;
        if (this.password.value == "") {
            var alert = this.alertCtrl.create({
                title: "Data Tidak Valid",
                subTitle: "",
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                email: this.email.value,
                password: this.password.value,
                id: this.global.id_user
            };
            var loader_1 = this.loading.create({
                content: "Memperbarui data....",
            });
            loader_1.present().then(function () {
                _this.http.post('http://localhost/fuelly/updateUser.php', data_1, options_1)
                    .map(function (res) { return res.text(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res) {
                        var alert = _this.alertCtrl.create({
                            title: "Pembaruan Berhasil",
                            subTitle: "Data kamu sudah diperbarui!",
                            buttons: ['OK']
                        });
                        alert.present();
                        console.log(_this.username.value);
                        console.log(_this.email.value);
                        //console.log(this.password.value);
                        _this.global.getNAME();
                        _this.global.getID();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__beranda_beranda__["a" /* BerandaPage */]);
                    }
                    else {
                        var alert = _this.alertCtrl.create({
                            title: "Pembaruan Gagal.",
                            subTitle: "Gagal memperbarui data.",
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("alamat"),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "alamat", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/settings/settings.html"*/`<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Pengaturan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list no-lines>\n      <ion-item>\n          <ion-label floating>Nama</ion-label>\n          <ion-input round type="text" placeholder="Nama" name="username" [(ngModel)]="valuename" #username></ion-input>\n      </ion-item>\n  \n      <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input round type="text" placeholder="Email" name="email" [(ngModel)]="valueemail" #email></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Alamat</ion-label>\n        <ion-input round type="text" placeholder="Alamat" name="alamat" [(ngModel)]="valuealamat" #alamat></ion-input>\n    </ion-item>\n  \n      <ion-item>\n          <ion-label floating>Kata Sandi</ion-label>\n          <ion-input round type="password" placeholder="Kata Sandi" name="password" #password></ion-input>\n      </ion-item>\n\n      <div padding>\n        <h6>*Masukan kata sandi lama jika ingin memperbarui data tanpa mengubah kata sandi.</h6>\n      </div>\n      \n      <ion-item>\n        <button ion-button color="dark" clear padding (click)="saveProfile()">Simpan</button>\n        <button ion-button color="primary" clear padding (click)="logOut()">Keluar</button>\n        <button ion-button color="danger" clear padding (click)="removeAccount()">Hapus Akun</button>\n        </ion-item>\n  \n    </ion-list>\n  </ion-content>\n  `/*ion-inline-end:"/home/mgunturg/Documents/Projekan/bismillah2/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _f || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map