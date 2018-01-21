// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Wallet, WalletService }  from './wallets.service';
import {WalletTransactions, WalletTransactionsService} from './wallet-transactions.service'

@Component({
  selector: 'list-wallet',
  template: `
      <p>
        <a routerLink="/createwallet"> 
           <img   src="../assets/images/pluswall.jpg" alt="Send" height="16px" width="16px"/> 
            Wallets
        </a>
       </p>
       <p class="headerwallet"> Davide's wallet, last updated Dec 18th, 2017</p>
       <br/>
       <ul class="items">
        <li *ngFor="let wallet of wallets$ | async" class="card" style="width: 344px; height: 166px;"
          [class.selected]="wallet.id === selectedId">
          <a [routerLink]="['/transactions', wallet.id]">

          <div class="card" style="width: 344px; height: 166px;">
          <div style="font-size: 12px">
          <img class="card-img-top" src="../assets/images/{{wallet.img}}.jpg" height="17.8 px" width="17.8 px" alt="Card image cap">
          {{ wallet.name }}
        </div>
          <div class="card-block">
            <div style ="font-size: 64px; font-family: Roboto-Bold;border-bottom:  1px solid #979797;">
            {{wallet.value}} {{wallet.symbol}}</div>
            <p  class="card-text">Currency exchange USD {{wallet.exchange}}</p>
          </div>
        </div>

          </a>
        </li>
      </ul>
   `
   ,
  styles: [`
          .headerwallet {
            font-family: Roboto-Regular;
            font-size: 17px;
            color: #6c6464;
            line-height: 21px;
            position: fixed;
            top: 33px;
            left: 26px;
            width: 318px;
            height: 24px;
          }
          .plusimg{
             position: fixed;
             top: 44.1px;
             left: 19.7px;
             width: 16.7px;
             height: 16.9px;
          }
          .backwallet {
            position: fixed;
            top: 40px;
            left: 51px;
            color: #4A4A4A;
            font-size: 24px;
            spacing: 0.86px;
            font-family: Roboto-Light;
            width: 201px;
            height: 18px;
          }
          .wallets {
            position: fixed;
            top: 40px;
            left: 51px;
            color: #4A4A4A;
            font-size: 20px;
            font-family: Roboto-Light;
            letter-spacing: 0.86px;
          }
            .symbol {
                font-family: Roboto-Bold;
                fot-size: 24px;
          }
  `]
})
export class WalletsListComponent implements OnInit {
  wallets$: Observable<Wallet[]>; 

  private selectedId: number;

  constructor(
    private service: WalletService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.wallets$  = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getWallets();
      });
  }
}
