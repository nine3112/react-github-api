import initialState from '../contants/contants'
// import {SEARCH} from '../actions/github'
const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH':
      return state = {
            TextSearch: action.payload.TextSearch,
            Repo: []
        }
        default:
        return state = {...state}
    }
  }
  export default SearchReducer;