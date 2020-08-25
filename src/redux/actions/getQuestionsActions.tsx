import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
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
      console.log('dispatching get questions success with results', results)
      dispatch(getQuestionsSuccess(results))
    } catch (error) {
      console.log('dispatching get questions failure')
      dispatch(getQuestionsFailure(error))
    }
  }
}