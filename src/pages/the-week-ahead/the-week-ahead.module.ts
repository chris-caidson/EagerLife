import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheWeekAheadPage } from './the-week-ahead';

@NgModule({
  declarations: [
    TheWeekAheadPage,
  ],
  imports: [
    IonicPageModule.forChild(TheWeekAheadPage),
  ],
})
export class TheWeekAheadPageModule {}
