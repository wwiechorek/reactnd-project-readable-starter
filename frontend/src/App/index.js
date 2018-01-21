import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Template from '../Template'

import List from './pages/List'

class App extends Component {
  render() {
    return (
      <Template>
        <Route exact path="/" component={List} />
        <Route exact path="/category/:category" component={List} />
      </Template>
    )
  }
}

export default App
