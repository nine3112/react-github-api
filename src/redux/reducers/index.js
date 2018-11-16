import { combineReducers } from 'redux'
import github from './github'
import connectRouter from './github'
const rootReducer = (history) => combineReducers({
    github: github,
    router: connectRouter(history)
  })
  
  export default rootReducer