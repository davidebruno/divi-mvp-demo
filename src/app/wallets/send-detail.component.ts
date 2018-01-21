import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { Wallet, WalletService }  from './wallets.service';

@Component({
  template: `
  <p>
     <a class="backsend" (click)="gotoWalletsList(wallet)">
         <img class="backimg" src="../assets/images/back.jpg" alt="Send" height="16px" width="16px"/>Send
      </a>
  </p>
  <div *ngIf="wallet$ | async as wallet">
    <div class="styletext">
      <div class="value"><input style="width:130px; border: none; color:#9FA7B3;" type="text" maxlength="8" value="0"></div>
      <div class="currencytxt">{{wallet.name}}</div> 
    </div>
  </div>

  <form class="form-inline styletext">
   <p>
    <label class="position1before">From: </label> 
    <input type="text" value="Davide Bruno" readonly class="form-control position1 mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="From:">
   </p>
   <p>
    <label class="position2before">To: </label> 
    <mat-form-field class="position2">
      <mat-select [(value)]="selected">
        <mat-option></mat-option>
        <mat-option value="mark">Mark Travis</mat-option>
        <mat-option value="geoff">Geoff McCabe</mat-option>
        <mat-option value="michae">Michael Greenwood</mat-option>
        <mat-option value="nick">Nick Saponaro</mat-option>
      </mat-select>
    </mat-form-field>
    </p>
  
  </form>
    
    <div class="imgsend">
      <img  width="120px;" height="120px;" src="../assets/images/076_send_paperplane-64.png" >
    <div>
    <div class="sendtxt">SEND</div>

  </div>
  `,
  styles : [`
            .styletext {
              font-family: Roboto-Regular;
              font-size: 16px;
              color: #A7A9AB;
              letter-spacing: 0;
            }
            .backimg {
              position: fixed;
              top: 44px;
              left: 19.7px;
            }
            .backsend {
              position: fixed;
              top: 35px;
              left: 51px;
              color: #4A4A4A;
              font-size: 24px;
              font-family: Roboto-Light;
            }
            .value {
              position: fixed;
              top: 111px;
              left: 105px;
              font-size: 32px;
              color: #9FA7B3;
              font-family: Roboto-Medium;
              width: 70px;
              height: 56px;
              letter-spacing: 0.25px;
            }
            .currencytxt {
              position: fixed;
              top: 131px;
              left: 238px;
              margin-right: 20px;
              font-size: 12px;
              coor: #FF000000;
              font-family: Roboto-Medium;
              text-transform: uppercase;
              font-weight: 900;
            }

            .dropdown{
              position: fixed;
              top: 174px;
              left: 195px;
              font-size: 12px;
              coor: #FF000000;
              font-family: Roboto-Medium;
              text-transform: uppercase;
              font-weight: 900;
              border: 0;
              box-shadow: none;
            }
            .select {
              border: none;
              box-shadow: none; 
            }
            .form-control  {
                border-top:   0;
                border-right: 0;
                border-left:  0;
                box-shadow: none; /* You may want to include this as bootstrap applies these styles too */

            }
            .position1before {
              position: fixed;
              left: 33px;
              top: 215px;
            }
            .position1 {
              position: fixed;
              left: 82px;
              top: 200px;
              box-sizing: border-box;
              width: 230px;
              height: 56px;
            }
            .position2before {
              position: fixed;
              left: 33px;
              top: 280px;
            }
            .position2 {
              position: fixed;
              left: 82px;
              top: 264px;
              box-sizing: border-box;
              width: 230px;
              height: 56px;
            }
            .imgsend {
              position: fixed;
              left: 120px;
              top: 452px;
            }
            .sendtxt {
              position: fixed;
              top: 590px;
              left: 163px;
              font-size: 13px;
              color:  #4A90E2;
              width: 33px;
              height: 15px;
              font-family: Roboto-Medium;
              letter-spacing: 0;
              opacity: 100%;
              font-weight: 900;
            }
  `]
  ,
  animations: [ slideInDownAnimation ]
})
export class SendDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  wallet$: Observable<Wallet>;
  selected = 'option2';

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
