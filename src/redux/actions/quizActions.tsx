import { UPDATE_QUIZ_SCORE, RESET_QUIZ_SCORE } from './types'
import { ActionType } from '../../reusableTypes'

export const updateQuizScore = (score: number): ActionType => {
  console.log('quiz actions UPDATE SCORE score', score)
  return { type: UPDATE_QUIZ_SCORE, payload: score }
}

export const resetQuizScore = (): ActionType => {
  console.log('quiz actions RESET SCORE')
  return { type: RESET_QUIZ_SCORE }
} 
