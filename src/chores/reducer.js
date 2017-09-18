import { List, Record } from 'immutable';
import { SIGN_OUT_SUCCESS } from '../../src/auth/action-types';
import {
  CREATE_CHORE_SUCCESS,
  REMOVE_CHORE_SUCCESS,
  FILTER_CHORES,
  LOAD_CHORES_SUCCESS,
  UPDATE_CHORE_SUCCESS,
} from './action-types';


export const ChoresState = new Record({
  deleted: null,
  filter: '',
  list: new List(),
  previous: null,
});


export function choresReducer(state = new ChoresState(), { payload, type }) {
  switch (type) {
    // CREATE_CHORE_SUCCESS add payload to the front of list if the current payload isn't deleted payload,
    // else set the list back to previous.
    // Also resets deleted chore and previous list to null.
    case CREATE_CHORE_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.deleted && state.deleted.key === payload.key ?
          state.previous :
          state.list.unshift(payload),
      });

    // REMOVE_CHORE_SUCCESS removes the chore that maches paload that's dispatched.
    case REMOVE_CHORE_SUCCESS:
      return state.merge({
        deleted: payload,
        previous: state.list,
        list: state.list.filter(chore => chore.key !== payload.key),
      });

    // FILTER_CHORES sets the filter type to filter attribute.
    case FILTER_CHORES:
      return state.set('filter', payload.filterType || '');

    // LOAD_CHORES_SUCCESS sets the payload in reverse (most recent from the top).
    case LOAD_CHORES_SUCCESS:
      return state.set('list', new List(payload.reverse()));

    // UPDATE_CHORE_SUCCESS reset deleted and previous to null and only updates a chore that's equal to payload
    case UPDATE_CHORE_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.list.map((chore) => {
          return chore.key === payload.key ? payload : chore;
        }),
      });
    
    // SIGN_OUT_SUCCESS resets to clean state.
    case SIGN_OUT_SUCCESS:
      return new ChoresState();

    default:
      return state;
  }
}
