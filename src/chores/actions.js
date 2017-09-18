import { getDeletedChore } from './selectors';
import { choreList } from './chore-list';
import {
  CREATE_CHORE_ERROR,
  CREATE_CHORE_SUCCESS,
  REMOVE_CHORE_ERROR,
  REMOVE_CHORE_SUCCESS,
  FILTER_CHORES,
  LOAD_CHORES_SUCCESS,
  UNDELETE_CHORE_ERROR,
  UNLOAD_CHORES_SUCCESS,
  UPDATE_CHORE_ERROR,
  UPDATE_CHORE_SUCCESS,
} from './action-types';


// create chore actions
export function createChoreError(error) {
  return {
    type: CREATE_CHORE_ERROR,
    payload: error,
  };
}

export function createChoreSuccess(chore) {
  return {
    type: CREATE_CHORE_SUCCESS,
    payload: chore,
  };
}

export function createChore(title) {
  return (dispatch) =>
    choreList.push({ completed: false, title })
      .catch(error => dispatch(createChoreError(error)));
}

// remove chore actions
export function removeChoreError(error) {
  return {
    type: REMOVE_CHORE_ERROR,
    payload: error,
  };
}

export function removeChoreSuccess(chore) {
  return {
    type: REMOVE_CHORE_SUCCESS,
    payload: chore,
  };
}
export function removeChore(chore) {
  return (dispatch) => {
    choreList.remove(chore.key)
      .catch(error => dispatch(removeChoreError(error)));
  };
}


// undelete chore actions
export function undeleteChore() {
  return (dispatch, getState) => {
    const chore = getDeletedChore(getState());
    if (chore) {
      choreList.set(chore.key, { completed: chore.completed, title: chore.title })
        .catch(error => dispatch(undeleteChoreError(error)));
    }
  };
}

export function undeleteChoreError(error) {
  return {
    type: UNDELETE_CHORE_ERROR,
    payload: error
  };
}

// update chore actions
export function updateChore(chore, changes) {
  return (dispatch) => {
    choreList.update(chore.key, changes)
      .catch(error => dispatch(updateChoreError(error)));
  };
}

export function updateChoreSuccess(chore) {
  return {
    type: UPDATE_CHORE_SUCCESS,
    payload: chore,
  };
}

export function updateChoreError(error) {
  return {
    type: UPDATE_CHORE_ERROR,
    payload: error,
  };
}

// load chore actions
export function loadChores() {
  return (dispatch, getState) => {
    const { auth } = getState();
    choreList.path = `chores/${auth.id}`;
    choreList.subscribe(dispatch);
  };
}

export function loadChoresSuccess(chores) {
  return {
    type: LOAD_CHORES_SUCCESS,
    payload: chores,
  };
}

// filter chores actions
export function filterChores(filterType) {
  return {
    type: FILTER_CHORES,
    payload: { filterType },
  };
}

// unload chores actions
export function unloadChores() {
  choreList.unsubscribe();
  return {
    type: UNLOAD_CHORES_SUCCESS,
  };
}