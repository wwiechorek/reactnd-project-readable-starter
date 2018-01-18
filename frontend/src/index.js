import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

import './index.css'
// import App from './App'
import Layout from './Layout'
import registerServiceWorker from './registerServiceWorker'

const enhancers = []
const middleware = [
  thunk
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose (
    applyMiddleware( ...middleware ),
    ...enhancers
)

const store = createStore(
    reducer,
    composedEnhancers
)

ReactDOM.render(
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout />
                    </BrowserRouter>
                </Provider>
            , document.getElementById('root'))
registerServiceWorker()
