import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import { authReducer } from './auth';
// import { notificationReducer } from './notification';
// import { tasksReducer } from './tasks';


export default combineReducers({
  routing: routerReducer,
});
