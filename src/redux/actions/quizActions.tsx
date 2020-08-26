import { 
  UPDATE_QUIZ_SCORE, 
  RESET_QUIZ_SCORE,
  UPDATE_SCOREBOARD,
  RESET_SCOREBOARD 
} from './types'
import { ActionType } from '../../reusableTypes'

export const updateQuizScore = (score: number): ActionType => {
  return { type: UPDATE_QUIZ_SCORE, payload: score }
}

export const resetQuizScore = (): ActionType => {
  return { type: RESET_QUIZ_SCORE }
}

export const updateScoreboard = (index: number, answeredCorrectly: boolean): ActionType => {
  return { type: UPDATE_SCOREBOARD, payload: {index, answeredCorrectly} }
}

export const resetScoreboard = (): ActionType => {
  return { type: RESET_SCOREBOARD }
}


