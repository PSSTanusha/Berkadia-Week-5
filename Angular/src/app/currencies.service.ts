import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor() { }
    getdata(){
      return[
        {
          Country:'India',
          Currency:'Rupee'
        },
        {
          Country:'Austria',
          Currency:'Euro'
        },
        {
          Country:'Syria',
          Currency: 'Syrian pound' 
        },
        {
          Country:'United States',
          Currency:'United states dollar'
        },
        {
          Country:'Turkey',
          Currency:'Turkish lira'
        },
        {
          Country:'Zambia',
          Currency:'Zambian Kwacha'
        },
        {
          Country:'Thailand',
          Currency:'Thai baht'
        }
      ]
    }
}

