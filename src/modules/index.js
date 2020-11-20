import { combineReducers } from 'redux';
import search from './search';
import scroll from './scroll';

const rootReducer = combineReducers({
  search,
  scroll,
});

export default rootReducer;
