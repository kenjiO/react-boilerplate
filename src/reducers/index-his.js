import { combineReducers } from 'redux'

import counterReducer from './counter-reducer'
import userReducer from './user-reducer'
import user from './user'

const rootReducer = combineReducers({
  counterData: counterReducer,
  userData: userReducer,
  user,
})

export default rootReducer
