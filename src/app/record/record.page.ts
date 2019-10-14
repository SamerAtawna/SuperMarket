import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Record } from '../record';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss']
})
export class RecordPage implements OnInit {
  searchTerm;
  records;
  filteredRecords;
  searchEnabled = false;
  constructor(private data: DataService, private loading: LoadingController) {}

  ngOnInit() {
    this.presentLoading('يتم التحميل...').then(async () => {
      await this.getRecord();
      this.loading.dismiss();
    });
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

  selectCustomer(id, name){
console.log(id, name);
  }

  async presentLoading(msg) {
    const loading = await this.loading.create({
      message: msg
    });
    await loading.present();
  }
}
