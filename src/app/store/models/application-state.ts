import { Product } from "../../models/product";

export interface ApplicationState {
    products: Product[];
    editingProduct: Product | null;
    isAdmin: boolean;
    cart: Product[];
}

export const INITIAL_STATE: ApplicationState = {
    products: [],
    editingProduct: null,
    isAdmin: false,
    cart: []
}