import { _getUsers } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(authedId) {
  return {
    type: SET_AUTHED_USER,
    authedId
  }
}

export function handleSetAuthedUser(authedId) {
  return (dispatch) => {
    dispatch(showLoading())
    return _getUsers()
      .then(users => {
        if(users[authedId]) {
          dispatch(setAuthedUser(authedId))
        }
        else if(authedId === '') {
          dispatch(setAuthedUser(''))
        }
        else{
          dispatch(setAuthedUser('invalid'))
        }
        dispatch(hideLoading())
      })
  }
}
