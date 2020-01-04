import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS
} from '../types'

const fetchProductsRequested = () => {
  return { type: FETCH_PRODUCTS_REQUESTED }
}

const fetchProductsSuccess = products => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: { products } }
}

const fetchProductsFailure = () => {
  return { type: FETCH_PRODUCTS_FAILURE }
}

export const fetchProducts = (appleStoreService, dispatch) => () => {
  dispatch(fetchProductsRequested())
  appleStoreService
    .getData()
    .then(data => dispatch(fetchProductsSuccess(data)))
    .catch(() => dispatch(fetchProductsFailure()))
}
