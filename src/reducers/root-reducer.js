import productListReducer from './product-list-reducer'
import shopingCartReducer from './shoping-cart-reducer'

const rootReducer = (state, action) => {
  return {
    productList: productListReducer(state, action),
    shopingCart: shopingCartReducer(state, action)
  }
}

export default rootReducer
