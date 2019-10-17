import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Record } from '../record';
import { LoadingController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss']
})
export class RecordPage implements OnInit {
  searchTerm;
  records;
  filteredRecords;
  searchEnabled = true;
  showInput = false;
  sum = '';
  selectedUser = {
    _id: '',
    Name: ''
  };
  constructor(
    private data: DataService,
    private loading: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.presentLoading('يتم التحميل...').then(async () => {
      await this.getRecord();
      this.loading.dismiss();
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '<b>تم الحفظ</b> <ion-icon name=md-done-all></ion-icon>',
      buttons: ['موافق']
    });

    await alert.present();
  }

  getRecord() {
    return new Promise((resolve, rej) => {
      return this.data.getRecords().subscribe(res => {
        this.records = res;
        this.filteredRecords = res;
        resolve();
      });
    });
  }
  getFilterd() {
    console.log('search val ', this.searchTerm);
    console.log('records ', this.records);
    this.searchEnabled = true;
    this.filteredRecords = this.records.filter(s => {
      console.log(s);
      return s.Name.includes(this.searchTerm);
    });
  }

  selectCustomer(id, name) {
    this.selectedUser.Name = name;
    this.selectedUser._id = id;
    this.showInput = true;
    this.searchEnabled = false;
  }
  addValue(val) {
    val === 10 ? (this.sum = '') : (this.sum += val);
  }
  addToAccount() {
    if (!this.sum) { return; }
    this.presentLoading('يتم الحفظ').then(() => {
      this.data.addTransaction(this.selectedUser._id, this.sum).subscribe(s => {
        console.log('finished trans', s);
        this.loading.dismiss();
        if (s) {
          this.presentAlert();
        }
      });
    });
  }

  async presentLoading(msg) {
    const loading = await this.loading.create({
      message: msg
    });
    await loading.present();
  }
}
