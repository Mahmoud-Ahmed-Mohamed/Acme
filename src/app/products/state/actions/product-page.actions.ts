import { Product } from '../../product';
import { createAction, props } from '@ngrx/store';

export const toggleProductCode = createAction(
    '[Product API] Toggle Product Code'
);

export const setCurrentProduct = createAction(
    '[Product API] Set Current Product',
    props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
    '[Product API] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
    '[Product API] Initialize Current Product'
);

export const loadProducts = createAction(
    '[Product API] Load'
);

export const updateProduct = createAction(
    '[Product API] Update Product',
    props<{ product: Product }>()
);

export const createProduct = createAction(
    '[Product API] Create Product',
    props<{ product: Product }>()
);

export const deleteProduct = createAction(
    '[Product API] Delete Product',
    props<{ productId: number }>()
);