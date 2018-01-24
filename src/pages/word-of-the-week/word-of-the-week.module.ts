import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordOfTheWeekPage } from './word-of-the-week';

@NgModule({
  declarations: [
    WordOfTheWeekPage,
  ],
  imports: [
    IonicPageModule.forChild(WordOfTheWeekPage),
  ],
})
export class WordOfTheWeekPageModule {}
