import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testar } from '../actions'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">      
          <h1 className="App-title" onClick={ () => this.props.testar() }>Welcome to React</h1>
          { this.props.test.action }
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  test: state.test
})

const mapDispatchToProps = dispatch => ({
  testar: (data) => dispatch(testar(data))
})

export default connect( mapStateToProps, mapDispatchToProps )(App)
