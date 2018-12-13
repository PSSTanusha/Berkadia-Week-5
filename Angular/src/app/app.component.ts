import { Component, OnInit } from '@angular/core';
import {CurrenciesService} from './currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicesapp';
  public currencies=[];
  constructor(private currencydata:CurrenciesService ){}
  ngOnInit(){
     this.currencies=this.currencydata.getdata();
  }
}
