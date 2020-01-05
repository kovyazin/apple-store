import productListReducer from './product-list-reducer'
import shoppingCartReducer from './shopping-cart-reducer'
import searchReducer from './search-reducer'

const rootReducer = (state, action) => {
  return {
    productList: productListReducer(state, action),
    shoppingCart: shoppingCartReducer(state, action),
    search: searchReducer(state, action)
  }
}

export default rootReducer
