import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
class NavBar extends React.Component {
  handleClick(e) {
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(''))
  }
  render () {
    const { authedUser, users } = this.props
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new'>New Question</Link>
        <Link to='/leaderboard'>Leaderboard</Link>
        {users[authedUser] && <span>Hello, {users[authedUser].name}</span>}
        <Link to='/login' onClick={ e => this.handleClick(e) }>Logout</Link>

      </div>
    )
  }
}

function mapStateToprops({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToprops)(NavBar)
