import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product";

const NAME_SPACE = '[Application]';

export const loadProductDataRequest = createAction(
    `${NAME_SPACE} Load Product Data Request`
);

export const loadProductDataSuccess = createAction(
    `${NAME_SPACE} Load Product Data Success`,
    props<{products: Product[]}>()
);

export const addToCart = createAction(
    `${NAME_SPACE} Add Product To Cart`,
    props<{ product: Product }>()
);