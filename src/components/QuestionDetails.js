import React from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import ErrorPage from './ErrorPage'
import Authentication from './Authentication'

class QuestionDetails extends React.Component {
  handleAnswer(e) {
    let answer = ''
    if(e.target.id === 'option-one-btn') {
      answer = 'optionOne'
    }
    if(e.target.id === 'option-two-btn') {
      answer = 'optionTwo'
    }
    e.target.style.backgroundColor = 'red'
    const { dispatch, id, authedUser } = this.props
    dispatch(handleAnswerQuestion(authedUser, id, answer))
  }
  render() {
    const { question, authedUser, users, id } = this.props
    if(authedUser === '') {
      return <Authentication location={ this.props.location }/>
    }
    if(!question) {
      return <ErrorPage />
    }
    const isAnswered = users[authedUser].answers[id]
    const { avatarURL } = users[authedUser]
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
            onClick={e => this.handleAnswer(e)}
            style={{backgroundColor: isAnswered === 'optionOne' ? 'red' : null}}>
              A.{question.optionOne.text}?
          </button>
          {isAnswered && <p>{question.optionOne.votes.length} people chose this option</p>}
          <button
            id='option-two-btn'
            disabled={ isAnswered }
            onClick={e => this.handleAnswer(e)}
            style={{backgroundColor: isAnswered === 'optionTwo' ? 'red' : null}}>
              B.{question.optionTwo.text}?
          </button>
          {isAnswered && <p>{question.optionTwo.votes.length} people chose this option</p>}
        </div>

      </div>
    )
  }
}

function mapStateToprops({ users, questions, authedUser }, props) {
  const { id } = props.match.params
  return {
    question: questions[id],
    users,
    authedUser,
    id,
  }
}

export default connect(mapStateToprops)(QuestionDetails)
