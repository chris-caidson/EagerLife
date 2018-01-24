import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuoteOfTheDayPage } from './quote-of-the-day';

@NgModule({
  declarations: [
    QuoteOfTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(QuoteOfTheDayPage),
  ],
})
export class QuoteOfTheDayPageModule {}
