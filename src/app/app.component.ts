import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApplicationState } from './store/models/application-state';
import { loadProductDataRequest } from './store/actions/application-actions';
import { Product } from './models/product';
import { getProducts } from './store/selectors/application-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stones-and-crystals';
  constructor(private store: Store<ApplicationState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadProductDataRequest());
  }
}
