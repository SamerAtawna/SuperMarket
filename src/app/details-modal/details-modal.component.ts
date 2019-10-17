import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
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
  userDataArr2: Array<any> = [];
  isLoading = true;
  constructor(public data: DataService,  private modalController: ModalController) {}

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
          let Obj = {
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
      'dismissed': true
    });
  }
}
