import { SET_FILTER_METHOD, SET_SEARCH_VALUE } from '../types/search'

export const setSearchValue = value => {
  return {
    type: SET_SEARCH_VALUE,
    payload: { value }
  }
}

export const setFilterMethod = method => ({
  type: SET_FILTER_METHOD,
  payload: { method }
})
