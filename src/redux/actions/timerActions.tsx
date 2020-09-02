import {
  RESET_TIMER,
  UPDATE_TIME_REMAINING,
  SET_TIMED_OUT
} from './types'
import { ActionType } from '../../reusableTypes'

export const resetTimer = (): ActionType => {
  return { type: RESET_TIMER }
}

export const updateTimeRemaining = (): ActionType => {
  return { type: UPDATE_TIME_REMAINING }
}

export const setTimedOut = (timedOut: boolean): ActionType => {
  return { type: SET_TIMED_OUT, payload: timedOut }
}