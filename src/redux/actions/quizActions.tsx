import { 
  UPDATE_QUIZ_SCORE, 
  RESET_QUIZ_SCORE
} from './types'
import { ActionType } from '../../reusableTypes'

export const updateQuizScore = (score: number): ActionType => {
  return { type: UPDATE_QUIZ_SCORE, payload: score }
}

export const resetQuizScore = (): ActionType => {
  console.log('ACTION reset quiz score')
  return { type: RESET_QUIZ_SCORE }
}




