const initialState = {
  searchValue: ''
}

const searchReducer = (state, { type }) => {
  if (state === undefined) {
    return initialState
  }

  switch (type) {
    default:
      return state.search
  }
}

export default searchReducer
