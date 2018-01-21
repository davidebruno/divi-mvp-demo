// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

// import { Hero, HeroService }  from './hero.service';
import {WalletTransactions, WalletTransactionsService} from './wallet-transactions.service'

@Component({
  selector: 'wallet-transactions',
  template: `
    <p>
      <a routerLink="/walletlist"> 
        <img   src="../assets/images/back.jpg" alt="Send" height="16px" width="16px"/> 
        Transactions
        <div *ngIf="transaction$ | async as transaction">
            {{transaction.description}} 
        </div>
      </a>
    </p>
  
    <div class="list-group">
      <li *ngFor="let transaction of transactions$ | async" href="#" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{transaction.description}}</h5>
        <small class="text-muted"><p class="red" >{{transaction.currency}} {{transaction.amount}}</p></small>
      </div>
      <p class="mb-1">{{transaction.date}}</p>
     <!-- <small class="text-muted">Donec id elit non mi porta.</small> -->
    </li>
    </div>

    <p class="float">
    <ngc-float-button  icon="cancel">
      <ngc-float-item-button (click)="receive()" icon="add_circle" content="Receive"></ngc-float-item-button>
      <ngc-float-item-button (click)="send()" icon="remove_circle" content="Send" ></ngc-float-item-button>
    </ngc-float-button>
  </p>

   `
   ,
  styles: [`
          .content {
            background: white;
            color: blue;
            box-shadow: none;
          }
          .float {
            margin-left: 308px;
          }
          .fab-toggle {
            background: black;
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
            font-size: 24px;
            font-family: Roboto-Light;
            letter-spacing: 0.86px;
          }
          .red {
            color: red;
          }
          .value {
            }
            .symbol {
                font-family: Roboto-Bold;
                fot-size: 24px;
            }
  `]
})
export class WalletTransactionsComponent implements OnInit {
  transactions$: Observable<WalletTransactions[]>;

  private selectedId: number;

  constructor(
    private service: WalletTransactionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.transactions$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getWalletTransactions();
      });
  }

  send() {
    this.router.navigate(['send/'+ this.selectedId ]);
  }
  receive() {
    this.router.navigate(['receive/'+ this.selectedId ]);
  }
}
