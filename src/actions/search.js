
// import shop from '../api/shop'
import * as types from '../constants/SearchType'

const SearchUserGitHub = TextSearch => ({
    type: types.SearchUser,
    TextSearch
  })

export const searchGitHub = TextSearch => (dispatch) => {
      dispatch(SearchUserGitHub(TextSearch))
  }