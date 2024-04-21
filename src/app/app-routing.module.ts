import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'products/add',
        component: AddProductComponent
      },
    ]
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: '',
    component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
