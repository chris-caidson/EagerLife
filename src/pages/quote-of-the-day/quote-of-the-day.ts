import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote-of-the-day',
  templateUrl: 'quote-of-the-day.html',
})
export class QuoteOfTheDayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
