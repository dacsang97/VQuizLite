import QuizApi from '../middleware/api';
import { AWAIT_MARKER } from 'redux-await';
export const GET_QUIZ = 'quiz/get';


export function getSet(setId) {
  return async (dispatch) => {
      dispatch({
          type: GET_QUIZ,
          AWAIT_MARKER,
          payload: QuizApi.getSet(setId)
      })
  }
}
