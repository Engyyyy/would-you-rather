import React from 'react'
import { connect } from 'react-redux'

class User extends React.Component {
  componentDidMount() {
    const { userid, authedUser } = this.props
    if(userid === authedUser){
      document.getElementById(userid).style.backgroundColor = 'pink'
    }
  }
  render() {
    const { users, userid } = this.props
    return(
      <li id={userid}>
        <img
          src={users[userid].avatarURL}
          alt='user avatar' />
        <div>
          <h4>{users[userid].name}</h4>
          <div>
            <span>
              Answered Questions: {Object.keys(users[userid].answers).length}
            </span>
            <br/>
            <span>
              Asked Questions: {users[userid].questions.length}
            </span>
          </div>
        </div>
      </li>
    )
  }
}

function mapStateToprops({ users, authedUser }, { id }) {
  return {
    users,
    userid: id,
    authedUser,
  }
}

export default connect(mapStateToprops)(User)
