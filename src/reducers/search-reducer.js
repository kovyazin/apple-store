import { SET_SEARCH_VALUE } from '../types'

const initialState = {
  searchValue: ''
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
    default:
      return state.search
  }
}

export default searchReducer
