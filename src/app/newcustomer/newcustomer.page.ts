import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.page.html',
  styleUrls: ['./newcustomer.page.scss']
})
export class NewcustomerPage implements OnInit {
  username;
  showError = false;

  constructor(
    private data: DataService,
    private loading: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  addCustomer() {
    if (!this.username) {
      return;
    }
    this.presentLoading('جاري الحفظ').then(() => {
      this.data.newCustomer(this.username).subscribe(s => {
        if (s) {
          this.presentAlert();
        } else {
          this.showError = true;
        }
      });
      this.loading.dismiss();
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
      message: '<b>تم الحفظ</b> <ion-icon name=md-done-all></ion-icon>',
      buttons: ['موافق']
    });

    await alert.present();
  }
}
