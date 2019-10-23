import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
  ) {}

  ngOnInit() {
    if (localStorage.getItem('passcode') && !this.pass && localStorage.getItem('username')) {
      this.pass = localStorage.getItem('passcode');
      console.log('from localstorage');
    }
    this.loginAttempt();
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
      message: '<b>الرمز غير صحيح</b> <ion-icon name=md-error></ion-icon>',
      buttons: ['موافق']
    });

    await alert.present();
  }

  loginAttempt() {
    this.presentLoading('يتم التحقق...').then(async () => {
      await this.checkPassCode().then(res => {
        const remotePass = res[0].Pass;
        if (this.pass === remotePass) {
          localStorage.setItem('passcode', this.pass);
          this.router.navigateByUrl('home');
        } else {
          this.presentAlert();
        }
        console.log(res);
        this.loading.dismiss();
      });
    });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
