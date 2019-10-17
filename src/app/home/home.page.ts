import { DetailsModalComponent } from './../details-modal/details-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Record } from '../record';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  records;
  searchTerm;
  filteredRecords;
  selectedUser = {
    Name: '',
    Id: 0
  }

  constructor(private data: DataService, private loading: LoadingController, private modalController: ModalController) {}
  getFilterd() {
    console.log('search val ', this.searchTerm);
    console.log('records ', this.records);

    this.filteredRecords = this.records.filter(s => {
      console.log(s);
      return s.Name.includes(this.searchTerm);
    });
  }
  getRecord() {
    return new Promise((resolve, rej) => {
      return this.data.getRecords().subscribe(res => {
        console.log(res);
        this.filteredRecords = res;
        this.records = res;
        resolve();
      });
    });
  }

  getData() {
    this.presentLoading('...جاري التحميل')
    .then(async () => {
      await this.getRecord();
    })
    .then(() => {
      this.loading.dismiss();
    });
  }
  ngOnInit() {
  this.getData();
  }

  async presentLoading(msg) {
    const loading = await this.loading.create({
      message: msg
    });
    await loading.present();
  }
  async presentModal(id, name) {
    this.selectedUser.Id = id;
    this.selectedUser.Name = name;
    this.data.selectedCustObj.next(this.selectedUser);
    const modal = await this.modalController.create({
      component: DetailsModalComponent
    });
    return await modal.present();
  }

}
