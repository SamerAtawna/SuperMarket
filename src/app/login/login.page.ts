import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../data.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { resolve } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  pass;
  uname;

  constructor(
    private data: DataService,
    private loading: LoadingController,
    private alertController: AlertController,
    private router: Router,
    private menuCtrl: MenuController,
    private zone: NgZone
  ) {}

  ngOnInit() {
    if (localStorage.getItem('password') && localStorage.getItem('username')) {
      this.pass = localStorage.getItem('password');
      this.uname = localStorage.getItem('username');
      this.loginAttempt();

      console.log('from localstorage');
    }
  }
  checkPassCode() {
    return new Promise((res, rej) => {
      this.data.checkLogin(this.uname, this.pass).subscribe(ps => {
        res(ps);
      });
    });
  }
  async presentLoading(msg) {
    const loading = await this.loading.create({
      message: msg
    });
    await loading.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '<b>البيانات خاطئة</b> <ion-icon name=md-error></ion-icon>',
      buttons: ['موافق'],
      cssClass: 'alertArabic'
    });

    await alert.present();
  }

  loginAttempt() {
    if (!this.uname || !this.pass) {
      return;
    }
    this.presentLoading('يتم التحقق...')
      .then(async () => {
        await this.checkPassCode().then((res: Array<any>) => {
          console.log('res => ', res);
          if(Array.isArray(res)){
            
          }
          if ((res.length === 0) || res === null) {
            this.presentAlert().then(() => {
              this.loading.dismiss();
            });
          } else {
            localStorage.setItem('username', res[0].StoreName);
            localStorage.setItem('password', res[0].Password);
            this.data.selectedStore.next(res[0]);
            this.router.navigateByUrl('home');
          }
        });
      })
      .then(() => {
        this.loading.dismiss();
      });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
