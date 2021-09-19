import React from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import NavBar from './NavBar'
import { Redirect } from 'react-router-dom'
import Authentication from './Authentication'

class NewQuestion extends React.Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleChange(e) {
    if(e.target.id === 'option-one-text') {
      this.setState({ optionOneText: e.target.value })
    }
    if(e.target.id === 'option-two-text') {
      this.setState({ optionTwoText: e.target.value })
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state
    dispatch(handleAddQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }))

    this.setState({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    })
  }
  render() {
    if(this.props.authedUser === '') {
      return <Authentication location={ this.props.location }/>
    }
    return(
      <div>
        {this.state.toHome && <Redirect to='/' />}
        <NavBar />
        <form onSubmit={ e => this.handleSubmit(e) }>
          <h1>Would You Rather...?</h1>
          <input
            id='option-one-text'
            placeholder='option one...'
            value={ this.state.optionOneText }
            onChange={ e => this.handleChange(e) }
            />
          <input
            id='option-two-text'
            placeholder='option two...'
            value={ this.state.optionTwoText }
            onChange={ e => this.handleChange(e) }
            />
          <button
            type='submit'
            disabled={ this.state.optionOneText === '' || this.state.optionTwoText === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
