import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarModule } from './customer/search-bar/search-bar.module';
import { CustomerModule } from './customer/customer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductModule } from './admin/add-product/add-product.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { rootReducer } from './store/reducers/root-reducer';
import { ApplicationEffects } from './store/effects/application-effects';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchBarModule,
    CustomerModule,
    BrowserAnimationsModule,
    AddProductModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AdminModule,
    RouterModule,
    StoreModule.forRoot({root: rootReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ApplicationEffects]),
    StoreRouterConnectingModule.forRoot(),
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
