import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { MenuItemsModule } from './menu-items/menu-items.module';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [MenuItemsModule],
  providers: [],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
