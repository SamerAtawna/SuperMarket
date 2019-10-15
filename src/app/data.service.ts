import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*'
  });
  apiLink = 'http://localhost:3000/customers';
  constructor(private http: HttpClient) {}

  getRecords(): Observable<Record> {
    return this.http.get<Record>(this.apiLink);
  }

  castArray(obj) {
    return Array.of(obj);
  }


  addTransaction(id, sum) {
    return this.http.get(`http://localhost:3000/addamount?sum=${sum}&id=${id}`);
  }
}
