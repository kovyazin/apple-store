import { SET_FILTER_METHOD, SET_SEARCH_VALUE } from '../types'

const initialState = {
  searchValue: '',
  filterMethod: 'by increasing price'
}

const searchReducer = (state, { type, payload }) => {
  if (state === undefined) {
    return initialState
  }

  switch (type) {
    case SET_SEARCH_VALUE:
      return {
        ...state.search,
        searchValue: payload.value
      }
    case SET_FILTER_METHOD:
      return {
        ...state.search,
        filterMethod: payload.method
      }
    default:
      return state.search
  }
}

export default searchReducer
