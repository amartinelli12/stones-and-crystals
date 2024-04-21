import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductsModule { }
