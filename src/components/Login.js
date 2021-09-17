import React from 'react'
import { handleSetAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class Login extends React.Component {
  state = {
    input: '',
  }
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  handleClick(e) {
    e.preventDefault()
    const { input } = this.state
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(input))
    this.setState({ input: '' })
  }
  render() {
    const { authedUser } = this.props
    return (
      <div>
        <h3>LOGIN</h3>
        <input
          placeholder='Enter your id...'
          value={ this.state.input }
          onChange={ e => this.handleChange(e) }
          />
        <button
          onClick={ e => this.handleClick(e) }
          >
            LOGIN
        </button>
        {authedUser === 'invalid' && <div>Invalid user id!</div>}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Login)
