import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { CustomerMenuItemsComponent } from './menu-items.component';
import { MenuItemModule } from './menu-item/menu-item.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    CustomerMenuItemsComponent
  ],
  imports: [
    MenuItemModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  exports: [CustomerMenuItemsComponent]
})
export class MenuItemsModule { }
