import {
  ADD_PRODUCTS_TO_CART,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_SEARCH_VALUE
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

export const addProductsToCart = id => ({
  type: ADD_PRODUCTS_TO_CART,
  payload: { id }
})

export const removeProductFromCart = id => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: { id }
})

export const removeAllProductsFromCart = id => ({
  type: REMOVE_ALL_PRODUCTS_FROM_CART,
  payload: { id }
})

export const setSearchValue = value => {
  return {
    type: SET_SEARCH_VALUE,
    payload: { value }
  }
}

export const fetchProducts = appleStoreService => () => dispatch => {
  dispatch(fetchProductsRequested())
  appleStoreService
    .getData()
    .then(data => dispatch(fetchProductsSuccess(data)))
    .catch(() => dispatch(fetchProductsFailure()))
}
