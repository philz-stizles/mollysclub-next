import { combineReducers } from 'redux'
import logReducer from './log/log-reducer'
import alertReducer from './alert/modal-reducer'

export default combineReducers({
  log: logReducer,
  alert: alertReducer,
})
