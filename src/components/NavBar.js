import React from 'react'
import { NavLink } from 'react-router-dom'
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
      <div className='flex' id='nav-bar'>
        <div className='nav-bar-element green'>
          <NavLink to='/' exact={true} activeClassName='active-link'>Home</NavLink>
        </div>
        <div className='nav-bar-element green'>
          <NavLink to='/add' activeClassName='active-link'>New Question</NavLink>
        </div>
        <div className='nav-bar-element green'>
          <NavLink to='/leaderboard' activeClassName='active-link'>Leaderboard</NavLink>
        </div>
        {users[authedUser] &&
          <span className='welcome nav-bar-element'>Hello, {users[authedUser].name}</span>}
        <div className='nav-bar-element green'>
          <NavLink
            to='/login'
            onClick={ e => this.handleClick(e) }
            activeClassName='active-link'>
              Logout
          </NavLink>
        </div>

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
