import { _getUsers, _getQuestions } from '../_DATA'
import { getUsers } from './users'
import { getQuestions, } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleGetInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
