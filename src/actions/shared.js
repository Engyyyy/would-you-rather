import { _getUsers, _getQuestions } from '../_DATA'
import { getUsers } from './users'
import { getQuestions } from './questions'

export function handleGetInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
      })
  }
}
