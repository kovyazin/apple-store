import AppleStoreService from '../services'
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  SET_FILTERED_PRODUCTS
} from '../types/product-list'

const fetchProductsRequested = () => {
  return { type: FETCH_PRODUCTS_REQUESTED }
}

const fetchProductsSuccess = products => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: { products } }
}

const fetchProductsFailure = () => {
  return { type: FETCH_PRODUCTS_FAILURE }
}

export const setFilteredProducts = term => ({
  type: SET_FILTERED_PRODUCTS,
  payload: { term }
})

const appleStoreService = new AppleStoreService()

export const fetchProducts = () => dispatch => {
  dispatch(fetchProductsRequested())
  appleStoreService
    .getData()
    .then(data => dispatch(fetchProductsSuccess(data)))
    .catch(() => dispatch(fetchProductsFailure()))
}
