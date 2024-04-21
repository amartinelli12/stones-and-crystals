import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerMenuItemComponent } from './menu-item.component';


@NgModule({
  declarations: [
    CustomerMenuItemComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [CustomerMenuItemComponent]
})
export class MenuItemModule { }
