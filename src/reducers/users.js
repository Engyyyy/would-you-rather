import { GET_USERS } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/questions'
export function users(state={}, action) {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          }
        }
      }
    default:
      return state
  }
}
