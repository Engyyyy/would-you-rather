import { GET_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export function questions(state={}, action) {
  switch(action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
        }
      }
    default:
      return state
  }
}
