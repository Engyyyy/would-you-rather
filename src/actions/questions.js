import { _saveQuestionAnswer } from '../_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => dispatch(answerQuestion(authedUser, qid, answer)))
  }
}
