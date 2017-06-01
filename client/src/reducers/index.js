import { combineReducers } from 'redux';
import players from './players';
import teams from './teams';
import owner from './owner';

const rootReducer = combineReducers({
  players,
  teams,
  owner
});

export default rootReducer;