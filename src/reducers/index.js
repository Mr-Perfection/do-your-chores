import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from '../auth';
// import { notificationReducer } from './notification';
import { choresReducer } from '../../src/chores';


export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  chores: choresReducer,
});
