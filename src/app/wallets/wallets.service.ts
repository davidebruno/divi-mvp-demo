import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Wallet {
  constructor(public id: number, public name: string, public symbol :string,
     public value:number, public exchange: string, public img: string) { }
}

const WALLLETS = [
  new Wallet(11, 'Bitcoin',   'btc',  473.07,  '$16,160.70',  "bitcoin"),
  new Wallet(12, 'Ethereum',  'eth',  191.31, '$774.79',     "etherium"),
  new Wallet(13, 'Divi',      'divi', 1588, '$1.43',        "divi"),
  new Wallet(14, 'Litecoin',  'lite', 87.23,   '$286.03',     "litecoin"),
  new Wallet(15, 'Neo',       'neo',  211.39,  '$64.98',       "neo"),
  new Wallet(16, 'Ark',       'ark',  350,  '$7.75',        "ark")
]; 

@Injectable()
export class WalletService {
  getWallets() { return Observable.of(WALLLETS); }

  getWallet(id: number | string) {
    return this.getWallets()
      // (+) before `id` turns the string into a number
      .map(wallets => wallets.find(wallet => wallet.id === +id));
  }
}
