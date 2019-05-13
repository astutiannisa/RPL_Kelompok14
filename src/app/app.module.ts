import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { BerandaPage } from '../pages/beranda/beranda';
import { OrderPage } from '../pages/order/order';
import { SettingsPage } from '../pages/settings/settings';
import { PickStationPage } from '../pages/pick-station/pick-station';
import { WaitOrderPage } from '../pages/wait-order/wait-order';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { GlobalVariableProvider } from '../providers/global-variable/global-variable';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    BerandaPage,
    OrderPage,
    SettingsPage,
    PickStationPage,
    WaitOrderPage,
    OrderHistoryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    BerandaPage,
    OrderPage,
    SettingsPage,
    PickStationPage,
    WaitOrderPage,
    OrderHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalVariableProvider,
    Network,
    Geolocation
  ]
})
export class AppModule {}
