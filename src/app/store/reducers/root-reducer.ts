import { Action, createReducer, on } from "@ngrx/store";
import { ApplicationState, INITIAL_STATE } from "../models/application-state";
import { addToCart, loadProductDataSuccess } from "../actions/application-actions";
import { Product } from "src/app/models/product";
import { products } from "src/app/models/product-mock";

const decrementProductCount = (products: Product[], product: Product) => {
    products.map(x => {
        if (x === product) {
            return {
                ...x,
                count: x.count - 1
            }
        }
        return x;
    });
    return [...products];
}


export const rootReducer = createReducer(
    INITIAL_STATE,
    on(loadProductDataSuccess, (state: ApplicationState, { products }) => ({
        ...state,
        products
    })),
    on(addToCart, (state: ApplicationState, { product }) => ({
        ...state,
        products: decrementProductCount(state.products, product),
        cart: [...state.cart, product]
    }))
);