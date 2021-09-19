import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends React.Component {

  handleClick(e, id) {
    this.props.history.push(`/questions/${id}`)
  }
  render() {
    const { optionOne, optionTwo, avatarURL, id } = this.props
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
        <button onClick={ e => this.handleClick(e, id) }>
          View Poll
        </button>
      </li>
    )
  }
}

function mapStateToprops({ users, questions }, { id }) {
  return {
    optionOne: questions[id].optionOne,
    optionTwo: questions[id].optionTwo,
    avatarURL: users[questions[id].author].avatarURL,
    id,
  }
}

export default withRouter(connect(mapStateToprops)(Question))
