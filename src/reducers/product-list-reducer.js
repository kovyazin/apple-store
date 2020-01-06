import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_SUCCESS,
  SET_FILTERED_PRODUCTS
} from '../types'

const initialState = {
  products: [],
  filteredProducts: [],
  isLoading: true,
  hasError: false
}

const productListReducer = (state, { type, payload }) => {
  if (state === undefined) return initialState
  const { productList } = state

  switch (type) {
    case FETCH_PRODUCTS_REQUESTED:
      return {
        ...productList,
        products: [],
        isLoading: true,
        hasError: false
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...productList,
        products: payload.products,
        isLoading: false,
        hasError: false
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...productList,
        products: [],
        isLoading: false,
        hasError: true
      }
    case SET_FILTERED_PRODUCTS: {
      let sortFunc

      if (state.search.filterMethod === 'by increasing price') {
        sortFunc = (a, b) => a.price - b.price
      } else if (state.search.filterMethod === 'by decreasing price') {
        sortFunc = (a, b) => b.price - a.price
      }

      return {
        ...productList,
        filteredProducts: productList.products
          .filter(({ title }) =>
            title.toLowerCase().includes(payload.term.toLowerCase())
          )
          .sort(sortFunc)
      }
    }

    default:
      return productList
  }
}

export default productListReducer
