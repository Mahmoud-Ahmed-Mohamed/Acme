import { Product } from '../../product';
import { createAction, props } from '@ngrx/store';

export const loadProductSuccess = createAction(
    '[Product Page] Load Success',
    props<{ products: Product[] }>()
);

export const loadProductaFailure = createAction(
    '[Product Page] Load Fail',
    props<{ error: string }>()
);

export const updateProductSuccess = createAction(
    '[Product Page] Update Product Success',
    props<{ product: Product }>()
);

export const updateProductFailure = createAction(
    '[Product Page] Update Product Fail',
    props<{ error: string }>()
);

export const createProductSuccess = createAction(
    '[Product Page] Create Product Success',
    props<{ product: Product }>()
);

export const createProductFailure = createAction(
    '[Product Page] Create Product Fail',
    props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
    '[Product Page] Delete Product Success',
    props<{ productId: number }>()
);
export const deleteProductFailure = createAction(
    '[Product Page] Delete Product Fail',
    props<{ error: string }>()
);