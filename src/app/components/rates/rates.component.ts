import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  public allCurrentExchanges: any;
  public ratesLimit = 10;
  public selectOptionsExchanges: any = [];
  public convertResult: any;
  public convertOneCost: any;
  @ViewChild('from') from: any;
  @ViewChild('to') to: any;


  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.onGetCurrExchange()

  }

  onGetCurrExchange(): any {
    this.api.getCurrExChanges()
      .subscribe((data: any) => {
        this.allCurrentExchanges = data;
        Object.keys(data['rates']).map((item) => {
          this.selectOptionsExchanges.push(item);
        });
      });
  }

  onShowMoreRates(): any {
    this.ratesLimit = this.ratesLimit + 10;
  }

  onConvertExchanges(amount: any): any {
    this.api.getConvertRates(this.from.nativeElement.value, this.to.nativeElement.value)
      .subscribe(data => {
        Object.values(data).map((item: any) => {
          this.convertOneCost = item;
          this.convertResult = item * amount;
        });
      });
  }

  onSwapValues() {
    const fr = this.from.nativeElement.value;
    this.from.nativeElement.value = this.to.nativeElement.value;
    this.to.nativeElement.value = fr;
    this.convertResult = '';
    this.convertOneCost = '';
  }


}
