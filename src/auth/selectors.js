import { createSelector } from 'reselect';


const authStateSelector = state => state.auth;
const authStateJSSelector = auth => auth.toJS();

export const getAuth = createSelector(
  authStateSelector,
  authStateJSSelector,
);

export function isAuthenticated(state) {
  return getAuth(state).authenticated;
}

