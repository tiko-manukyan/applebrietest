import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = environment.BASE_URL;
  private accessKey = environment.accessKey;
  private employees_URL = 'https://randomuser.me/api?results=20'

  constructor(private http: HttpClient) { }

  getCurrExChanges(): Observable<any> {
    return this.http.get(this.BASE_URL + this.accessKey);
  }

  getConvertRates(from: any, to: any): Observable<any> {
    return this.http.get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=22125637db3339474037`);
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.employees_URL);
  }


}


