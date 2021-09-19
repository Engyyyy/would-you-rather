import React from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import ErrorPage from './ErrorPage'
import Authentication from './Authentication'
import NavBar from './NavBar'

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
        <NavBar />
        <div className='flex-vertical border'>
          <div className='item-vertical'>
            <div className='parent flex'>
              <div className='item'>
                <img
                  src={ avatarURL }
                  alt='avtar of question author'
                  />
              </div>
              <div className='item'>
                <h4 className='subheader'>{users[question.author].name} asks:</h4>
                <h3 className='header'>Would You Rather ... </h3>
              </div>
            </div>
            <div className='poll-btns flex'>
              <button
                id='option-one-btn'
                className='welcome'
                disabled={ isAnswered }
                onClick={e => this.handleAnswer(e)}
                style={{
                  backgroundColor:
                  isAnswered === 'optionOne'
                  ? 'pink'
                  : isAnswered === 'optionTwo' ? 'grey' : null,
                  border: isAnswered === 'optionOne' ? '5px solid red' : null}}>
                    A.{question.optionOne.text}?
                </button>
                {isAnswered &&
                  <div>
                    <p>{question.optionOne.votes.length} people chose this option</p>
                    <p>{(question.optionOne.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100}% chose this option</p>
                  </div>
                }
              <button
                id='option-two-btn'
                className='welcome'
                disabled={ isAnswered }
                onClick={e => this.handleAnswer(e)}
                style={{
                  backgroundColor:
                  isAnswered === 'optionTwo'
                  ? 'pink'
                  : isAnswered === 'optionOne' ? 'grey' : null,
                  border: isAnswered === 'optionTwo' ? '3px solid red ' : null}}>
                    B.{question.optionTwo.text}?
              </button>
              {isAnswered &&
                <div>
                  <p>{question.optionTwo.votes.length} people chose this option</p>
                  <p>{(question.optionTwo.votes.length/(question.optionOne.votes.length+question.optionTwo.votes.length))*100}% chose this option</p>
                </div>
              }
            </div>
          </div>
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
