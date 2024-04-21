import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { SearchBarModule } from './search-bar/search-bar.module';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    SearchBarModule
  ],
  providers: [],
  exports: [CustomerComponent]
})
export class CustomerModule { }
