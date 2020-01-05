import productListReducer from './product-list-reducer'
import shoppingCartReducer from './shopping-cart-reducer'

const rootReducer = (state, action) => {
  return {
    productList: productListReducer(state, action),
    shoppingCart: shoppingCartReducer(state, action)
  }
}

export default rootReducer
