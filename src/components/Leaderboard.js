import React from 'react'
import { connect } from 'react-redux'
import User from './User'
class Leaderboard extends React.Component {
  render() {
    const { users } = this.props
    return(
      <div>
        <h1>Leaderboard</h1>
        <ol>
          {users.map(user => (
            <User key={ user } id={ user } />
          ))}
        </ol>
      </div>
    )
  }
}

function mapStateToprops({ users }) {
  return {
    users: Object.keys(users)
      .sort((a, b) => {
        const score_a = Object.keys(users[a].answers).length + users[a].questions.length
        const score_b = Object.keys(users[b].answers).length + users[b].questions.length
        return score_b - score_a
      }),
  }
}

export default connect(mapStateToprops)(Leaderboard)
