import React from 'react'
import { handleGetInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Login from './Login'
import Home from './Home'
import QuestionDetails from './QuestionDetails'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetInitialData())
  }
  render() {
    const { authedUser } = this.props
    return(
      <BrowserRouter>
          <div>
            {
              authedUser === '' &&
              <Redirect to='/login' />
            }
            <Route exact path='/' component={ Home } />
            <Route path='/login' component={ Login } />
            <Route path='/add' component={ NewQuestion } />
            <Route path='/leaderboard' component={ Leaderboard } />
            <Route path='/questions/:id' component={ QuestionDetails } />

          </div>
      </BrowserRouter>
    )
  }
}

function mapStateToprops({ authedUser }) {
    return {
      authedUser
    }
}

export default connect(mapStateToprops)(App)
