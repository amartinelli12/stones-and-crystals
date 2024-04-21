import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'

import { AddProductComponent } from './add-product.component';

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule
  ],
  providers: [],
  exports: [AddProductComponent]
})
export class AddProductModule { }
