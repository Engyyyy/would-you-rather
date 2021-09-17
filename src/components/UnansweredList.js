import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class UnansweredList extends React.Component {
  render() {
    const { unanswered } = this.props
    return(
      <div>
        <ul>
          {unanswered.map(questionId => (
            <Question key={ questionId } id={ questionId } />
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const questionsArray = Object.keys(questions)
  const answersArray = Object.keys(users[authedUser].answers)

  const unanswered = questionsArray
    .filter(id => !answersArray.includes(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    unanswered
  }
}

export default connect(mapStateToProps)(UnansweredList)
