import React from 'react'
import { connect } from 'react-redux'

class QuestionDetails extends React.Component {

  handleAnswer(e) {

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
    isAnswered: users[authedUser].answers[id]
  }
}

export default connect(mapStateToprops)(QuestionDetails)
