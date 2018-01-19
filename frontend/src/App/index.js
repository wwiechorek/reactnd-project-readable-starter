import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Template from '../Template'

import Home from './pages/Home'
import Category from './pages/Category'

class App extends Component {
  render() {
    return (
      <Template>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:category" component={Category} />
      </Template>
    )
  }
}

export default App
