import React from 'react'

class NewQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }
  handleChange(e) {
    if(e.target.id === 'option-one-text') {
      this.setState({ optionOne: e.target.value })
    }
    if(e.target.id === 'option-two-text') {
      this.setState({ optionTwo: e.target.value })
    }
  }
  handleSubmit(e) {
    e.preventDefault()

  }
  render() {
    return(
      <form onSubmit={ e => this.handleSubmit(e) }>
        <h1>Would You Rather...?</h1>
        <input
          id='option-one-text'
          placeholder='option one...'
          value={ this.state.optionOne }
          onChange={ e => this.handleChange(e) }
          />
        <input
          id='option-two-text'
          placeholder='option two...'
          value={ this.state.optionTwo }
          onChange={ e => this.handleChange(e) }
          />
        <button
          type='submit'
          disabled={ this.state.optionOne === '' || this.state.optionTwo === ''}>
            Submit
        </button>
      </form>
    )
  }
}

export default NewQuestion
