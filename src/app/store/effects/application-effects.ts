import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { loadProductDataRequest, loadProductDataSuccess } from "../actions/application-actions";
import { products } from '../../models/product-mock';
import { map } from "rxjs/operators";

@Injectable()
export class ApplicationEffects {

    
    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProductDataRequest),
            map(() => loadProductDataSuccess({
                products
            }))
        )
    )

    constructor(
        private actions$: Actions
    ) {}
}