import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { LoadingController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-refund",
  templateUrl: "./refund.page.html",
  styleUrls: ["./refund.page.scss"]
})
export class RefundPage implements OnInit {
  searchTerm;
  records;
  amount;
  filteredRecords;
  searchEnabled = true;
  showInput = false;
  selectedUser = {
    _id: "",
    Name: ""
  };
  constructor(
    private data: DataService,
    private loading: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.presentLoading("يتم التحميل...").then(async () => {
      await this.getRecord();
      this.loading.dismiss();
    });
  }

  getFilterd() {
    console.log("search val ", this.searchTerm);
    console.log("records ", this.records);
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
  getRecord() {
    return new Promise((resolve, rej) => {
      return this.data.getRecords().subscribe(res => {
        this.records = res;
        this.filteredRecords = res;
        resolve();
      });
    });
  }
  async presentLoading(msg) {
    const loading = await this.loading.create({
      message: msg
    });
    await loading.present();
  }

  refundCust() {
    this.presentLoading("جاري الحفظ...").then(async () => {
      await this.data
        .refundCustomer(this.selectedUser._id, this.amount * -1)
        .then(s => {
          s.subscribe(res => {
            console.log(res);
            this.loading.dismiss();
            this.amount = 0;
          });
        });
    });
    //
  }
}
