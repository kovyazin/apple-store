import {
  ADD_PRODUCTS_TO_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../types/shopping-cart'

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
