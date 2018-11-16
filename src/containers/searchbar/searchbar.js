import React, { Component } from 'react';
class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            Textsearch: ""
        }
    }
    Setvalue = (event) => {
        this.setState({
            Textsearch : event.target.value
        })
        console.log("SUBMIT2 : ", event)
        // event.preventdefault()
    }
    Search = (e) => {
        console.log("SUBMIT : ", this.state.Textsearch)
        this.props.SEARCH(this.state.Textsearch)
        e.preventDefault()
    }
    render() {
      return (
            <React.Fragment>
                <form onSubmit={this.Search}>
                    <section className="hero is-info is-small">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <p className="title">
                                    GitHub Search
                                </p>
                                <p className="subtitle">
                                    <input className="input" type="text" placeholder="Text input" onChange={this.Setvalue}/>
                                </p>
                                <p className="subtitle">
                                <input type="submit" className="button is-danger" value="Danger" />
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="box cta">
                        <p className="has-text-centered">
                            <span className="tag is-primary">New</span> Here we have modal cards. When you click on them they will open
                            functional modal examples.
                        </p>
                    </div>
                </form>
            </React.Fragment>
      );
    }
  }
  
export default Searchbar