import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  obj: {
    Name: string;
    Id: number;
  };
  selectedCustObj = new BehaviorSubject(this.obj);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*'
  });
  apiLink = 'https://super-market-abu-malk.herokuapp.com/customers';
  constructor(private http: HttpClient) {}

  getRecords(): Observable<Record> {
    return this.http.get<Record>(this.apiLink);
  }

  castArray(obj) {
    return Array.of(obj);
  }

  addTransaction(id, sum) {
    return this.http.get(`https://super-market-abu-malk.herokuapp.com/addamount?sum=${sum}&id=${id}`);
  }

  async refundCustomer(id, sum) {
    console.log('amount', sum);
    return this.http.get(`https://super-market-abu-malk.herokuapp.com/refund?sum=${sum}&id=${id}`);
  }

  getUserDetails(id){
    return this.http.get(`https://super-market-abu-malk.herokuapp.com/userdetails?id=${id}`);
  }

  newCustomer(name) {
    return this.http.get(`https://super-market-abu-malk.herokuapp.com/addcust?name=${name}`);
  }

  checkLogin(){
    return this.http.get(`http://localhost:3000/passcheck`);

  }

}
