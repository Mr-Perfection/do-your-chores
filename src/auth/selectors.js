import { createSelector } from 'reselect';


const authStateSelector = state => state.auth;
// toJS() is an api to convert immutable to json object.
const authStateJSSelector = auth => auth.toJS();

export const getAuth = createSelector(
  state => state.auth,
  auth => auth.toJS(),
);

export function isAuthenticated(state) {
  return getAuth(state).authenticated;
}

