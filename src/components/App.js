import React from 'react'
import { handleGetInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Login from './Login'
class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetInitialData())
  }
  render() {
    return(
      <Login />
    )
  }
}

export default connect()(App)
