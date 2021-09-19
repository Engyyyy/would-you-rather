import React from 'react'
import { handleSetAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

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
    this.setState({
      input: '',
     })
  }
  render() {
    const { authedUser } = this.props
    const from = this.props.location.state ? this.props.location.state.from : '/'
    return (
      <div>
        <LoadingBar />
        <div className='container'>
          <div className='background' ></div>
          <div className='parent'>
            <h3 className='header'>LOGIN</h3>
            <input
              type='text'
              className='input'
              placeholder='Enter your id...'
              value={ this.state.input }
              onChange={ e => this.handleChange(e) }
              />
            {authedUser === 'invalid' && <p className='invalid'>Invalid user id!</p>}
            <button
              className='green btn'
              onClick={ e => this.handleClick(e) }
              disabled={ this.state.input === ''}
              >
                LOGIN
            </button>
            {
              authedUser !== '' && authedUser !== 'invalid' &&
              <Redirect to={from} />
            }
          </div>
        </div>
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
