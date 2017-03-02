import { combineReducers } from 'redux'

import counterReducer from './counter-reducer'
import userReducer from './user-reducer'

export default combineReducers({
  counterData: counterReducer,
  userData: userReducer,
})

