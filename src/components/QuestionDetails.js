import React from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionDetails extends React.Component {

  handleAnswer(e) {
    let answer = ''
    if(e.target.id === 'option-one-btn') {
      answer = 'optionOne'
    }
    if(e.target.id === 'option-two-btn') {
      answer = 'optionTwo'
    }
    const { dispatch, id, authedUser } = this.props
    dispatch(handleAnswerQuestion(authedUser, id, answer))
  }
  componentDidMount() {
    if(this.props.isAnswered === 'optionOne') {
      document.getElementById('option-one-btn').style.backgroundColor = 'red'
    }
    if(this.props.isAnswered === 'optionTwo') {
      document.getElementById('option-two-btn').style.backgroundColor = 'red'
    }
  }
  render() {
    const { avatarURL } = this.props.author
    const { question, isAnswered } = this.props
    return(
      <div>
        <img
          src={ avatarURL }
          alt='avtar of question author'
          />
        <h3>Would You Rather ... </h3>
        <div>
          <button
            id='option-one-btn'
            disabled={ isAnswered }
            onClick={e => this.handleAnswer(e)}>
              A.{question.optionOne.text}?
          </button>
          {isAnswered && <p>{question.optionOne.votes.length} people chose this option</p>}
          <button
            id='option-two-btn'
            disabled={ isAnswered }
            onClick={e => this.handleAnswer(e)}>
              B.{question.optionTwo.text}?
          </button>
          {isAnswered && <p>{question.optionTwo.votes.length} people chose this option</p>}
        </div>

      </div>
    )
  }
}

function mapStateToprops({ users, questions, authedUser }, { id }) {
  return {
    author: users[questions[id].author],
    question: questions[id],
    isAnswered: users[authedUser].answers[id],
    authedUser,
  }
}

export default connect(mapStateToprops)(QuestionDetails)
