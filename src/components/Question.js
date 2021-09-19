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
      <li className='margin'>
        <div className='flex'>
          <div className='item'>
            <img
              src={ avatarURL }
              alt='avatar of question author'
              />
          </div>
          <div className='item text'>
            <p><strong>Would You Rather ...?</strong></p>
            <div className='options'>
              <span className='red'>A. {optionOne.text}</span>
              <br />
              <span className='blue'>B. {optionTwo.text}</span>
            </div>
            <button onClick={ e => this.handleClick(e, id) } className='poll-btn green'>
              View Poll
            </button>
          </div>
        </div>
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
