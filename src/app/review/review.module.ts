import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { ReviewComponent } from './review.component';

@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: [],
  exports: [ReviewComponent]
})
export class ProductsModule { }
