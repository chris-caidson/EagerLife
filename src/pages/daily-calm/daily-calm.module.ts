import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyCalmPage } from './daily-calm';

@NgModule({
  declarations: [
    DailyCalmPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyCalmPage),
  ],
})
export class DailyCalmPageModule {}
