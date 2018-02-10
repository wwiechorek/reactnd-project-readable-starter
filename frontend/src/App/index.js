import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Template from './Components/Template'

import List from './pages/List'
import Post from './pages/Post'
import SavePost from './pages/SavePost'

class App extends Component {
  render() {
    return (
      <Template>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/create" component={SavePost} />
          <Route exact path="/:category" component={List} />
          <Route exact path="/:category/:id" component={Post} />
          <Route exact path="/post/:id/edit" component={SavePost} />
          {/* <Route component={NoMatch}/> */}
        </Switch>
      </Template>
    )
  }
}

export default App
