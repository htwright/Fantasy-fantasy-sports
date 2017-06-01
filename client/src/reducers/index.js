import { combineReducers } from 'redux';
import players from './players'
import teams from './teams'

const rootReducer = combineReducers({
  players
})

export default rootReducer