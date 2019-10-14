import { Component, OnInit, ViewChild } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { DataService } from "../data.service";
import { IonInfiniteScroll } from "@ionic/angular";
import { Record } from "../record";
import { Observable } from "rxjs";


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  records;

  constructor(private data: DataService, private loading: LoadingController) {}
  getRecord() {
    return new Promise((resolve, rej) => {
      return this.data.getRecords().subscribe(res => {
        console.log(res);
        this.records = res;
        resolve();
      });
    });
  }

  getData(){
    this.presentLoading("...جاري التحميل")
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
}
