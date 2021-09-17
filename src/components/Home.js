import React from 'react'
import AnsweredList from './AnsweredList'
import UnansweredList from './UnansweredList'
class Home extends React.Component {
  render() {
      return(
        <div>
          <h1>Would You Rather...?</h1>
          <button>Answered Questions</button>
          <button>Unanswered Questions</button>
          <UnansweredList />
        </div>
      )
  }
}

export default Home
