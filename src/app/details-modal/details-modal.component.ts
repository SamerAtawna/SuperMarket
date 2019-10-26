import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  LoadingController,
  AlertController
} from "@ionic/angular";
import { SMS } from "@ionic-native/sms/ngx";
import {
  Contacts,
  Contact,
  ContactField,
  ContactName
} from "@ionic-native/contacts/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";

@Component({
  selector: "app-details-modal",
  templateUrl: "./details-modal.component.html",
  styleUrls: ["./details-modal.component.scss"]
})
export class DetailsModalComponent implements OnInit {
  customer;
  userData;
  userDataObj: {} = {};
  userDataArr;
  amount;
  sum;
  showInputRecord = false;
  showInput = false;
  userDataArr2: Array<any> = [];
  isLoading = true;
  contactSMS: { name: string; phoneNumber: string } = {
    name: "",
    phoneNumber: ""
  };
  constructor(
    public data: DataService,
    private modalController: ModalController,
    private loading: LoadingController,
    private alertController: AlertController,
    private sms: SMS,
    private contacts: Contacts,
    private permission: AndroidPermissions
  ) {}

  ngOnInit() {
    this.data.selectedCustObj.subscribe(d => {
      this.customer = d;
      console.log("d:", d);
      this.data.getUserDetails(this.customer.Id).subscribe(dt => {
        this.userData = dt;
        console.log("dt: ", dt);
        this.userData.forEach(element => {
          this.userDataObj[element.Date] = [];
        });
        this.userData.forEach(element => {
          this.userDataObj[element.Date].push(element.Amount);
        });
        Object.keys(this.userDataObj).forEach(el => {
          const Obj = {
            Date: el,
            Amount: this.userDataObj[el]
          };
          this.userDataArr2.push(Obj);
        });
        console.log("userDataArr2", this.userDataArr2);
        this.isLoading = false;
      });
    });

    this.userDataArr = Array.of(this.userDataObj);
    console.log(this.userDataObj);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
  async presentLoading(msg) {
    const loading = await this.loading.create({
      message: msg
    });
    await loading.present();
  }
  refundCust() {
    console.log(this.amount);
    if (this.amount === undefined) {
      return;
    }

    this.presentLoading("جاري الحفظ...").then(async () => {
      await this.data
        .refundCustomer(this.customer.Id, this.amount * -1)
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
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ["موافق"]
    });

    await alert.present();
  }
  addToAccount() {
    if (!this.sum) {
      return;
    }
    console.log(this.customer.id);
    this.presentLoading("يتم الحفظ").then(() => {
      this.data.addTransaction(this.customer.Id, this.sum).subscribe(s => {
        console.log("finished trans", s);
        this.loading.dismiss();
        if (s) {
          this.presentAlert("تم الحفظ");
        }
      });
    });
  }

  sendSMS() {
    console.log(`السلام عليكم حسابك حتى اليوم ${this.customer.amount}`);
    this.contacts
      .pickContact()
      .then(contact => {
        console.log(contact);
        console.log(contact.displayName);
        console.log(contact.phoneNumbers[0].value);
        console.log(this.contactSMS.name, this.contactSMS.phoneNumber);
        this.contactSMS.name = contact.displayName;
        this.contactSMS.phoneNumber = contact.phoneNumbers[0].value;
      })
      .then(() => {
        console.log("ask permission sms");
        this.permission
          .checkPermission(this.permission.PERMISSION.SEND_SMS)
          .then(res => {
            console.log(res);
          });
        this.permission
          .requestPermission(this.permission.PERMISSION.SEND_SMS)
          .then(s => {
            console.log(s);
          });
      })
      .then(() => {
        this.sms
          .send(
            this.contactSMS.phoneNumber,
            `السلام عليكم حسابك حتى اليوم ${this.customer.amount}`
          )
          .then(res => {
            if (res == "OK") {
              this.presentAlert("تم الارسال");
            }
          });
      });
  }
}
