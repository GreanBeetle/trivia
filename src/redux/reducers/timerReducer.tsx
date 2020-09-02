import {
  RESET_TIMER,
  UPDATE_TIME_REMAINING,
  SET_TIMED_OUT
} from '../actions/types'
import { ActionType } from '../../reusableTypes'

const initialState: { 
  currentTime: number, 
  timedOut: boolean 
} = {
  currentTime: 10,
  timedOut: false
}

const timerReducer = (state = initialState, action: ActionType ) => {
  switch (action.type) {
    case RESET_TIMER:
      return { ...state, currentTime: 10 }
    case UPDATE_TIME_REMAINING:
      return { ...state, currentTime: state.currentTime - 1 }
    case SET_TIMED_OUT:
      return { ...state, timedOut: action.payload }
    default: 
      return state
  }
}

export default timerReducer




