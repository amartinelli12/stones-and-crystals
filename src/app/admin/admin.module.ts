import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AddProductModule } from './add-product/add-product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AddProductModule,
    RouterModule
  ],
  providers: [],
  exports: [AdminComponent]
})
export class AdminModule { }
