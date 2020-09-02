import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  RESET_QUESTIONS,
  UPDATE_USER_ANSWERED_CORRECTLY  
} from './types'
import { 
  ObjectType, 
  ActionType 
} from '../../reusableTypes'
import { formatJSONquestions } from '../../utilities'

export const getQuestionsRequest = () => ({ type: GET_QUESTIONS_REQUEST })

export const getQuestionsSuccess = (json: ObjectType): ActionType => {
  return { type: GET_QUESTIONS_SUCCESS, payload: json }
}

export const getQuestionsFailure = (error: ObjectType): ActionType => {
  return { type: GET_QUESTIONS_FAILURE, payload: error }
}

export const getQuestions = (): ObjectType => {
  return async (dispatch: any) => {
    try {
      console.log('dispatching get questions request')
      dispatch(getQuestionsRequest())
      const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      const json = await response.json()
      const results = await formatJSONquestions(json.results)
      throw Error('bumble fuck!') // REMOVE!!!! 
      console.log('dispatching get questions success with results', results)
      dispatch(getQuestionsSuccess(results))
    } catch (error) {
      console.log('dispatching get questions failure')
      dispatch(getQuestionsFailure(error))
    }
  }
}

/**
 * this action likely isn't necessary but has been kept as a safety precaution in case getQuestions() fails
 */
export const resetQuestions = (): ActionType => {
  return { type: RESET_QUESTIONS } 
}

export const updateUserAnsweredCorrectly = (index: number, answeredCorrectly: boolean) => {
  return { type: UPDATE_USER_ANSWERED_CORRECTLY, payload: { index, answeredCorrectly } }
}
