import { Component } from '@angular/core';
import { Account } from '../types/account.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  SHOP: string = 'SHOP';
  ABOUT: string = 'ABOUT';
  CONTACT: string = 'CONTACT';
  COMPANY: string = `SoulShine Treasures`;
  SEARCH: string = 'Search';
  numNotification: number = 0;
  LOGO_PATH: string = 'https://cdn.shopify.com/s/files/1/0528/0074/9717/files/ravenstone_logo_navigation_desktop.svg';
  account: Account = {
    name: null
  };
  GIFT_REGISTERY_PATH = 'gift-registery';
}
