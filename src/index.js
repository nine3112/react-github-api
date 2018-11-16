import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithConnect from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/configurationStore'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import rootReducer from './redux/reducers/index'
import history from './redux/history/history'

const render = () => {
ReactDOM.render(<AppContainer><Provider store={store}><AppWithConnect /></Provider></AppContainer>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./redux/reducers/index', () => {
    store.replaceReducer(rootReducer(history))
  })
}
serviceWorker.unregister();
