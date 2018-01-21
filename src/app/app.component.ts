import { Component } from '@angular/core';
import {WalletsListComponent} from './wallets/wallets-list.component';

@Component({
  selector: 'app-root',
  template: `
   <!-- <h1 class="title">Angular Router</h1>  -->
    <nav>  
    </nav>
    <router-outlet></router-outlet>
  <!--  <router-outlet name="popup"></router-outlet> -->
  `
})
export class AppComponent {

}
