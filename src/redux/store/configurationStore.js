import rootReducer from '../reducers/index'
import initialState from '../contants/contants'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import history from '../history/history'
const store = createStore(
    rootReducer(history), // root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )
export default store;


