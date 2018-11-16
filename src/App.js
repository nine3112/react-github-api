import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Searchbar from './containers/searchbar/searchbar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Searchbar SEARCH={this.props.SEARCH}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    TextSearch: state.github.TextSearch
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    SEARCH: (TextSearch) => {
      dispatch({
        type: "SEARCH",
        payload: {
          TextSearch: TextSearch
        }
      })

    }
  }
}

const MyApp = () => (
    <App />
)
const AppWithConnect = connect(mapStateToProps,mapDispatchToProps)(MyApp)

export default AppWithConnect;


