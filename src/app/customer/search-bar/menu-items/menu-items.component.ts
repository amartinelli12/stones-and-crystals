import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState } from 'src/app/store/models/application-state';
import { getCartCount } from 'src/app/store/selectors/application-selectors';

@Component({
  selector: 'app-customer-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class CustomerMenuItemsComponent {
  HOME: string = 'Home';
  PRODUCTS: string = 'Products';
  REVIEWS: string = 'Reviews';
  COMPANY: string = `SoulShine Treasures`;
  SEARCH: string = 'Search';
  numNotification: number = 0;
  LOGO_PATH: string = 'https://cdn.shopify.com/s/files/1/0528/0074/9717/files/ravenstone_logo_navigation_desktop.svg';
  showAdminOptions: boolean = false;
  showCustomerOptions: boolean = true;
  showMenu: boolean = true;
  itemCount$!: Observable<number>;
  @ViewChild('menu') menu: any;

  constructor(
    private router: Router,
    private store$: Store<ApplicationState>
  ) {}

  ngOnInit() {
    this.itemCount$ = this.store$.pipe(select(getCartCount))
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  navigate(path: string) {
    this.router.navigate([path])
  }
}