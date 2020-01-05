import {
  ADD_PRODUCTS_TO_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../types'

const initialState = {
  cartProducts: [],
  orderTotal: 0
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
  const { products } = state.productList
  const { cartProducts } = state.shoppingCart
  const product = products.find(({ id }) => id === productId)
  const cartProductIndex = cartProducts.findIndex(({ id }) => id === productId)
  const cartProduct = cartProducts[cartProductIndex]
  const newItem = updateCartProduct(cartProduct, product, quantity)

  return {
    ...state,
    orderTotal: state.shoppingCart.orderTotal + quantity * product.price,
    cartProducts: updateCartProducts(cartProducts, newItem, cartProductIndex)
  }
}

const shoppingCartReducer = (state, { type, payload }) => {
  if (state === undefined) return initialState

  switch (type) {
    case ADD_PRODUCTS_TO_CART: {
      return updateOrder(state, payload.id, 1)
    }
    case REMOVE_PRODUCT_FROM_CART:
      return updateOrder(state, payload.id, -1)
    case REMOVE_ALL_PRODUCTS_FROM_CART: {
      const item = state.shoppingCart.cartProducts.find(
        ({ id }) => id === payload.id
      )
      return updateOrder(state, payload.id, -item.count)
    }
    default:
      return state.shoppingCart
  }
}

export default shoppingCartReducer
