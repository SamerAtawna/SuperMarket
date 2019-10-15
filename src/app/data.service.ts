import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiLink = 'https://super-market-abu-malk.herokuapp.com/data';
  constructor(private http: HttpClient) {}

  getRecords(): Observable<Record> {
    return this.http.get<Record>(this.apiLink);
  }

  castArray(obj){
    return Array.of(obj);
  }

  getByName(name): Observable<Record> {
    console.log('starting service....');
    return this.http.get<Record>(this.apiLink).pipe(take(1), filter( r => {

      return r.id == '5da4c1ef1c9d440000ab8b43';
    }))
    ;
  }

  addTransaction(id, sum){
   return this.http.get(`https://super-market-abu-malk.herokuapp.com/add?sum=${sum}?id=${id}`);
  }
}
