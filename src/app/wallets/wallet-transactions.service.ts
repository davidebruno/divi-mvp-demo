import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class WalletTransactions {
  constructor(public id: number, public description: string, public date: string, // or type Date
     public amount: number, public currency: string) { }
}

const WALLETTRANSACTIONS = [
  new WalletTransactions(11, 'Target (Ballantyne Location)',   'February 6th, 2016',  549.31,  "$"),
  new WalletTransactions(11, 'Target.com',                     'February 3rd, 2016',  215.04,  "$"),
  new WalletTransactions(11, 'Target (Taga Cay Location)',     'February 6th, 2016',  15.29,  "$"),
]; 

@Injectable()
export class WalletTransactionsService {
  getWalletTransactions() { return Observable.of(WALLETTRANSACTIONS); }

  getHero(id: number | string) {
    return this.getWalletTransactions()
      // (+) before `id` turns the string into a number
      .map(wallettransactions => wallettransactions.find(wallettransactions => wallettransactions.id === +id));
  }
}
