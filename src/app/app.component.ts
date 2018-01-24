import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";

  dailyPages: Array<{ title: string; pageName: string; icon: string }>;
  weeklyPages: Array<{ title: string; pageName: string; icon: string }>;
  otherPages: Array<{ title: string; pageName: string; icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.dailyPages = [
      {
        title: "Home",
        pageName: "HomePage",
        icon: "home"
      },

      // Daily Content
      {
        title: "Daily Calm",
        pageName: "DailyCalmPage",
        icon: "glass"
      },
      {
        title: "Daily Motivation",
        pageName: "DailyMotivationPage",
        icon: "fire"
      },
      {
        title: "Quote of the Day",
        pageName: "QuoteOfTheDayPage",
        icon: "quote-left"
      },
      {
        title: "Vision Board",
        pageName: "VisionBoardPage",
        icon: "magic"
      }
    ];

    this.weeklyPages = [
      {
        title: "Motivating Music",
        pageName: "MotivationalMusicPage",
        icon: "music"
      },
      {
        title: "Word of the Week",
        pageName: "WordOfTheWeekPage",
        icon: "newspaper-o"
      },
      {
        title: "Fulfilling Film",
        pageName: "FulfillingFilmPage",
        icon: "film"
      },
      {
        title: "The Week Ahead",
        pageName: "TheWeekAheadPage",
        icon: "calendar"
      },
      {
        title: "Weekly Wind-down",
        pageName: "WeekendWindDownPage",
        icon: "trophy"
      }
    ];

    this.otherPages = [
      {
        title: "Account",
        pageName: "AccountPage",
        icon: "id-card"
      },
      {
        title: "Settings",
        pageName: "SettingsPage",
        icon: "cog"
      },
      {
        title: "About",
        pageName: "AboutPage",
        icon: "info-circle"
      },
      {
        title: "Admin",
        pageName: "AdminPage",
        icon: "cogs"
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pageName) {
    this.nav.setRoot(pageName);
  }
}
