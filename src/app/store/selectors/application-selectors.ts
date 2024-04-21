import { DefaultProjectorFn, MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { ApplicationState } from "../models/application-state";

export const applicationSelector: MemoizedSelector<object, ApplicationState, DefaultProjectorFn<ApplicationState>> = createFeatureSelector('root');

export const getProducts = createSelector(
    applicationSelector,
    (state) => state.products
);

export const getCartCount = createSelector(
    applicationSelector,
    (state) => state.cart.length
);