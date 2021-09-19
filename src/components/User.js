import React from 'react'
import { connect } from 'react-redux'

class User extends React.Component {
  render() {
    const { users, userid, authedUser } = this.props
    return(
      <li id={userid} className='margin'>
        <div className='flex'
         style={{
          backgroundColor: authedUser === userid ? 'pink' : null
          }}>
          <img
          className='item'
            src={users[userid].avatarURL}
            alt='user avatar' />
          <div className='item'>
            <h3>{users[userid].name}</h3>
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
