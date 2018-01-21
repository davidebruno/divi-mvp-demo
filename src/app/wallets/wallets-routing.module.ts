import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WalletsListComponent }    from './wallets-list.component';
import { SendDetailComponent }  from './send-detail.component';
import { ReceiveComponent }  from './receive.coponent';
import {CreateWalletComponent}  from './create-wallet.component';
import {WalletTransactionsComponent}  from './wallet-transactions.component';

const heroesRoutes: Routes = [
  { path: 'walletlist', redirectTo:  'walletlist'},
  { path: 'send/:id', component: SendDetailComponent },
  { path: 'receive/:id', component: ReceiveComponent },
  { path: 'walletlist',  component: WalletsListComponent },
  { path: 'transactions/:id', component: WalletTransactionsComponent },
  { path: 'createwallet',  component: CreateWalletComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WalletRoutingModule { }
