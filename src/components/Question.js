import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
  render() {
    const { optionOne, optionTwo, avatarURL } = this.props
    return(
      <li>
        <img
          src={ avatarURL }
          alt='avatar of question author'
          />
        <p>Would You Rather ...?</p>
        <div>
          <p>A. {optionOne.text}</p>
          <p>B. {optionTwo.text}</p>
        </div>
      </li>
    )
  }
}

function mapStateToprops({ users, questions }, { id }) {
  return {
    optionOne: questions[id].optionOne,
    optionTwo: questions[id].optionTwo,
    avatarURL: users[questions[id].author].avatarURL
  }
}

export default connect(mapStateToprops)(Question)
