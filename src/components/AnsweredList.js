import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class AnsweredList extends React.Component {
  render() {
    const { answered } = this.props
    return (
      <div>
        <ul>
          {answered.map(questionId => (
            <Question key={ questionId } id={ questionId } />
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToprops({ users, questions, authedUser }) {
  const answered = Object.keys(users[authedUser].answers)
    .sort((a, b) => {
      return questions[b].timestamp - questions[a].timestamp
    })
    return {
      answered
    }
}

export default connect(mapStateToprops)(AnsweredList)
