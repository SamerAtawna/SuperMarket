import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  imageUrl = '../assets/HsabatLogo.png';
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
    },
    {
      title: ' زبون جديد',
      url: '/newcustomer',
      icon: 'md-person-add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl('login');

    });
  }
}
