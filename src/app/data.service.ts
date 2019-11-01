import { Injectable } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { map, filter, take } from "rxjs/operators";
import { Record } from "./record";

@Injectable({
  providedIn: "root"
})
export class DataService {
  isAuthenticated = false;
  obj: {
    Name: string;
    Id: number;
    amount: string;
  };
  store: {
    Password: string;
    StoreID: number;
    StoreName: string;
  };
  selectedCustObj = new BehaviorSubject(this.obj);
  selectedStore = new BehaviorSubject(this.store);
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*"
  });
  apiLink = 'https://super-market-abu-malk.herokuapp.com';
  // apiLink = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getRecords(storeId): Observable<Record> {
    console.log("storeid:(service) ", storeId);
    return this.http.get<Record>(`${this.apiLink}/customers?id=${storeId}`);
  }

  castArray(obj) {
    return Array.of(obj);
  }

  addTransaction(id, sum) {
    return this.http.get(`${this.apiLink}/addamount?sum=${sum}&id=${id}`);
  }

  async refundCustomer(id, sum) {
    console.log("amount", sum);
    return this.http.get(`${this.apiLink}/refund?sum=${sum}&id=${id}`);
  }

  getUserDetails(id) {
    return this.http.get(`${this.apiLink}/userdetails?id=${id}`);
  }

  newCustomer(name, storeid) {
    return this.http.get(
      `${this.apiLink}/addcust?name=${name}&storeid=${storeid}`
    );
  }

  checkLogin(uname, pass) {
    return this.http.get(
      `${this.apiLink}/passcheck?uname=${uname}&pass=${pass}`
    );
  }

  getStats(id) {
    return this.http.get(`${this.apiLink}/statis?id=${id}`);
  }
  getMoreStats(): Observable<any> {
    return this.http.get(`${this.apiLink}/statistwo`);
  }
}
