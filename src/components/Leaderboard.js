import React from 'react'
import { connect } from 'react-redux'
import User from './User'
import NavBar from './NavBar'
import Authentication from './Authentication'

class Leaderboard extends React.Component {
  render() {
    const { users, authedUser } = this.props
    if(authedUser === '') {
      return <Authentication location={ this.props.location }/>
    }
    return(
      <div>
      <NavBar />
        <h1 className='header'>Leaderboard</h1>
        <ol>
          {users.map(user => (
            <User key={ user } id={ user } />
          ))}
        </ol>
      </div>
    )
  }
}

function mapStateToprops({ users, authedUser }) {
  return {
    users: Object.keys(users)
      .sort((a, b) => {
        const score_a = Object.keys(users[a].answers).length + users[a].questions.length
        const score_b = Object.keys(users[b].answers).length + users[b].questions.length
        return score_b - score_a
      }),
      authedUser,
  }
}

export default connect(mapStateToprops)(Leaderboard)
