import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-word-of-the-week',
  templateUrl: 'word-of-the-week.html',
})
export class WordOfTheWeekPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
