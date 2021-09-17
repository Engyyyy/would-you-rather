import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import middleware from './middleware'
import reducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
