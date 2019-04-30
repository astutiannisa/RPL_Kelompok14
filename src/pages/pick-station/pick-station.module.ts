import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickStationPage } from './pick-station';

@NgModule({
  declarations: [
    PickStationPage,
  ],
  imports: [
    IonicPageModule.forChild(PickStationPage),
  ],
})
export class PickStationPageModule {}
