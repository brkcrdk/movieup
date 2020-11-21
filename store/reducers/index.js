import { combineReducers } from 'redux';
import sidebar from './sidebar';
import favs from './favs';

export default combineReducers({
  sidebar,
  favs,
});
