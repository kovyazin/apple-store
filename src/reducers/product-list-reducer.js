import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS
} from '../types'

const initialState = {
  products: [],
  isLoading: true,
  hasError: false
}

const productListReducer = (state, { type, payload }) => {
  if (state === undefined) return initialState

  switch (type) {
    case FETCH_PRODUCTS_REQUESTED:
      return {
        ...state,
        products: [],
        isLoading: true,
        hasError: false
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
        isLoading: false,
        hasError: false
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        isLoading: false,
        hasError: true
      }
    default:
      return state.productList
  }
}

export default productListReducer