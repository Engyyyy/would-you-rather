import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import AnsweredList from './AnsweredList'
import UnansweredList from './UnansweredList'

class Home extends React.Component {
  state={
    screen: 'unanswered'
  }
  handleClick(e) {
    if(e.target.id === 'unanswered-btn') {
      this.setState({ screen: 'unanswered'})
    }
    if(e.target.id === 'answered-btn') {
      this.setState({ screen: 'answered '})
    }
  }
  render() {
    return(
      <div>
        {
          this.props.loading
          ? null
          :
          <div>
            <NavBar />
            <h1 className='header'>Would You Rather...?</h1>
            <div className='center'>
              <button
                id='unanswered-btn'
                onClick={ e => this.handleClick(e)}
                className='green tab'>
                  Unanswered Questions
              </button>
              <button
                id='answered-btn'
                onClick={ e => this.handleClick(e) }
                className='green tab'>
                  Answered Questions
              </button>
            </div>
            {
              this.state.screen === 'unanswered'
              ? <UnansweredList />
              : <AnsweredList />
            }
          </div>
        }
      </div>
    )
  }
}

function mapStateToprops({ authedUser, questions, users }) {
  return {
    loading: authedUser === '' || !users || !questions
  }
}

export default connect(mapStateToprops)(Home)
