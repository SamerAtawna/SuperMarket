import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  imageUrl = '../assets/AbuMalk.PNG';
  public appPages = [
    {
      title: 'حسابات',
      url: '/home',
      icon: 'md-cash'
    },
    {
      title: 'احصائيات',
      url: '/list',
      icon: 'md-stats'
    },
    {
      title: 'سجل جديد',
      url: '/record',
      icon: 'md-create'
    },
    {
      title: ' استلام مبلغ',
      url: '/refund',
      icon: 'md-cash'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
