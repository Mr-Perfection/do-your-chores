import * as authActions from './actions';
import { firebaseAuth } from '../../src/firebase';

/** this function initializes the auth state.
    It will recursively call dispatch() to check and see if there's a chance in AuthState.
    if the change is completed, the promise() will be resolved.
*/
export default function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      (authUser) => {
        dispatch(authActions.initAuth(authUser));
        unsubscribe();
        resolve();
      },
      error => reject(error),
    );
  });
}
