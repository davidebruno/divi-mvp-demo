import {Component, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { Wallet, WalletService }  from './wallets.service';

@Component({
    template:`
    <div *ngIf="wallet$ | async as wallet">
    <p>
       <a class="backsend" (click)="gotoWalletsList(wallet)">
           <img class="backimg" src="../assets/images/back.jpg" alt="Send" height="16px" width="16px"/>
             Recceive  {{wallet.name }}
        </a>
    </p>
   
        <input type="text" value="" readonly class="form-control position1 mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Receive address: 0x9888weryyysddehshhskwwessda">

        <div class="imgreceive">
          <img  width="180px;" height="180px;" src="../assets/images/receive-addr.jpg" >
        <div>
    </div>
    `,
  styles:[`
          .imgreceive {
            position: fixed;
            left: 120px;
            top: 88px;
          }
  `
]})

export class ReceiveComponent implements OnInit {

    wallet$: Observable<Wallet>;


    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: WalletService
    ) {}
  
    ngOnInit() {
      this.wallet$ = this.route.paramMap
        .switchMap((params: ParamMap) =>
          this.service.getWallet(params.get('id')));
    }

    gotoWalletsList(wallet: Wallet) {
        let walletId = wallet ? wallet.id : null;
        // Pass along the wallet id if available
        // so that the WalletList component can select that hero.
        this.router.navigate(['/walletlist', { id: walletId }]);
      }
}

