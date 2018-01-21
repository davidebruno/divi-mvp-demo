import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { Wallet, WalletService }  from './wallets.service';

@Component({
  template: `
            <p>
              <a  (click)="gotoHeroes(hero)">
                  <img class="backimg" src="../assets/images/back.jpg" alt="Send" height="16px" width="16px"/>
                <p class="backwallet">Create new wallet</p>
                </a>
            </p>
            <form class="form-inline">
                <input type="text" class="form-control positionwalletn mb-2 mr-sm-2 mb-sm-0" id="walletname" placeholder="Wallet name">
                <input type="text" class="form-control positionownk mb-2 mr-sm-2 mb-sm-0" id="myownkey" placeholder="Enter my own key">
            </form>
            <div class="imggeneratewall">
              <img  width="120px;" height="120px;" src="../assets/images/generatewallet.jpg" >
             </div>
  `,
  styles : [`
            .backimg {
              position: fixed;
              top: 44px;
              left: 19.7px;
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
            .value {
              position: fixed;
              top: 111px;
              left: 154px;
              font-size: 72px;
              color: #9FA7B3;
              font-family: Roboto-Medium;
            }
            .currencytxt {
              position: fixed;
              top: 174px;
              left: 195px;
              font-size: 12px;
              coor: #FF000000;
              font-family: Roboto-Medium;
              text-transform: uppercase;
              font-weight: 900;
            }
            .form-control  {
                border-top:   0;
                border-right: 0;
                border-left:  0;
                box-shadow: none;
                border-bottom: 2px solid #D3D4D5;
            }
            .positionwalletn {
              position: fixed;
              left: 22px;
              top: 110px;
              box-sizing: border-box;
              width: 316px;
              height: 56px;
            }
            .positionownk {
              position: fixed;
              left: 22px;
              top: 172px;
              box-sizing: border-box;
              width: 316px;
              height: 56px;
            }
            .input::placeholder {
              left: 22px;
            }
            .imggeneratewall {
              position: fixed;
              left: 120px;
              width: 120px;
              height: 120px;
              top: 452px;
            }
  `]
  ,
  animations: [ slideInDownAnimation ]
})
export class CreateWalletComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero$: Observable<Wallet>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WalletService
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getWallet(params.get('id')));
  }

  gotoHeroes(wallet: Wallet) {
    let walletId = wallet ? wallet.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/walletlist', { id: walletId, foo: 'foo' }]);
  }
}
