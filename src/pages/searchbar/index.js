import React, {Component} from 'react';
// import counterReducer from '../../reducers/counter'
// import { createStore } from 'redux';

// Now we can create a Store
// const store = createStore(counterReducer);
export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_search: ''
    };
  }
  Search = (event) => {
    // console.log(event)
    // alert('A name was submitted: ' + this.state.text_search);
    store.dispatch({ type: 'SEARCH' }); // 1 (+1)
    event.preventDefault();
  }
  Setvalue = (event) => {
    // console.log(event.target.value)
    this.setState({text_search: event.target.value})
    this.store
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.Search}>
          <section className="hero is-info is-small">
            <div className="hero-body">
              <div className="container has-text-centered">
                <p className="title">
                  Github Search Data
                </p>
                <p className="subtitle">
                  <div className="columns">
                    <div className="column is-4 is-offset-4">
                      <input
                        className="input"
                        type="text"
                        placeholder="Text input"
                        onChange={this.Setvalue}/>
                    </div>
                  </div>
                </p>
                <p className="subtitle">
                  <div className="columns">
                    <div className="column is-4 is-offset-4">
                      <input type="submit" className="button is-danger" value="Submit"/>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </section>
          <div className="box cta">
            <p className="has-text-centered">
              <span className="tag is-primary">New</span>
              Here we have modal cards. When you click on them they will open functional modal
              examples.
            </p>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
