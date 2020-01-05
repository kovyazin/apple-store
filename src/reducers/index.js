import {
  ADD_PRODUCTS_TO_CART,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../types'

const initialState = {
  products: [],
  isLoading: true,
  hasError: false,
  cartProducts: [],
  totalCount: 0
}

const updateCartProducts = (cartProducts, item, idx) => {
  if (item.count === 0) return cartProducts.filter(({ id }) => id !== item.id)
  if (idx === -1) return [...cartProducts, item]
  return [...cartProducts.slice(0, idx), item, ...cartProducts.slice(idx + 1)]
}

const updateCartProduct = (cartProduct = {}, product, quantity) => {
  const {
    id = product.id,
    title = product.title,
    count = 0,
    price = 0
  } = cartProduct

  return {
    id,
    title,
    count: count + quantity,
    price: price + quantity * product.price
  }
}

const updateOrder = (state, productId, quantity) => {
  const { products, cartProducts } = state
  const product = products.find(({ id }) => id === productId)
  const cartProductIndex = cartProducts.findIndex(({ id }) => id === productId)
  const cartProduct = cartProducts[cartProductIndex]
  const newItem = updateCartProduct(cartProduct, product, quantity)

  return {
    ...state,
    totalCount: state.totalCount + quantity * product.price,
    cartProducts: updateCartProducts(cartProducts, newItem, cartProductIndex)
  }
}

const reducer = (state = initialState, { type, payload }) => {
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
    case ADD_PRODUCTS_TO_CART: {
      return updateOrder(state, payload.id, 1)
    }
    case REMOVE_PRODUCT_FROM_CART:
      return updateOrder(state, payload.id, -1)
    case REMOVE_ALL_PRODUCTS_FROM_CART: {
      const item = state.cartProducts.find(({ id }) => id === payload.id)
      return updateOrder(state, payload.id, -item.count)
    }
    default:
      return state
  }
}

export default reducer
