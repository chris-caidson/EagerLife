import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyMotivationPage } from './daily-motivation';

@NgModule({
  declarations: [
    DailyMotivationPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyMotivationPage),
  ],
})
export class DailyMotivationPageModule {}
