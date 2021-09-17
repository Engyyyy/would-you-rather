import { _getUsers } from '../_DATA'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

function setAuthedUser(authedId) {
  return {
    type: SET_AUTHED_USER,
    authedId
  }
}

export function handleSetAuthedUser(authedId) {
  return (dispatch) => {
    return _getUsers()
      .then(users => {
        if(users[authedId]) {
          dispatch(setAuthedUser(authedId))
        }
        else{
          dispatch(setAuthedUser('invalid'))
        }
      })
  }
}
