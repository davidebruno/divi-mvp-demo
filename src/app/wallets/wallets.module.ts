import { NgModule, CUSTOM_ELEMENTS_SCHEMA  }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { WalletsListComponent }    from './wallets-list.component';
import { SendDetailComponent }  from './send-detail.component';
import { ReceiveComponent }  from './receive.coponent';
import { CreateWalletComponent }  from './create-wallet.component';
import { WalletTransactionsComponent }  from './wallet-transactions.component';

import { WalletService } from './wallets.service';
import { WalletTransactionsService } from './wallet-transactions.service';

import { WalletRoutingModule } from './wallets-routing.module';

import {MatButtonModule, MatSelectModule} from '@angular/material';

import {NgcFloatButtonModule} from 'ngc-float-button';

import {MdlModule} from '@angular-mdl/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WalletRoutingModule,
    MdlModule,
    MatButtonModule,
    MatSelectModule,
    NgcFloatButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    WalletsListComponent,
    SendDetailComponent,
    ReceiveComponent,
    WalletTransactionsComponent,
    CreateWalletComponent
  ],
  providers: [ WalletService, WalletTransactionsService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WalletsModule {}
