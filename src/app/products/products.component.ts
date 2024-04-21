import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../store/models/application-state';
import { Observable } from 'rxjs';
import { getProducts } from '../store/selectors/application-selectors';
import { addToCart } from '../store/actions/application-actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() saveToCart: EventEmitter<Product> = new EventEmitter();
  products$!: Observable<Product[]>;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProducts))
  }

  addToCart(product: Product) {
    console.log({
      product
    });
    this.store.dispatch(addToCart({ product }))
  }

}
