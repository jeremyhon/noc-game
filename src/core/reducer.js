import { combineReducers } from 'redux'
import app from './app/reducer'
import interns from '../intern/reducer'
import companies from '../company/reducer'

const time = (state = 0, action) => {
  switch (action.type) {
    case 'ENGINE_TICK':
      return action.time
    default:
      return state
  }
}

export default combineReducers({
  app,
  time,
  interns,
  companies,
})
