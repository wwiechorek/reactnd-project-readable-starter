import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Template from './Components/Template'

import List from './pages/List'
import Post from './pages/Post'

class App extends Component {
  render() {
    return (
      <Template>
        <Route exact path="/" component={List} />
        <Route exact path="/category/:category" component={List} />
        <Route exact path="/post/:id" component={Post} />
      </Template>
    )
  }
}

export default App
