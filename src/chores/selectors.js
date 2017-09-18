import { createSelector } from 'reselect';


export function getChores(state) {
  return state.chores;
}

export function getChoreList(state) {
  return getChores(state).list;
}

export function getChoreFilter(state) {
  return getChores(state).filter;
}

export function getDeletedChore(state) {
  return getChores(state).deleted;
}


//-------------------------------------
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleChores = createSelector(
  getChoreList,
  getChoreFilter,
  (chores, filter) => {
    switch (filter) {
      case 'active':
        return chores.filter(task => !task.completed);

      case 'completed':
        return chores.filter(task => task.completed);

      default:
        return chores;
    }
  }
);
