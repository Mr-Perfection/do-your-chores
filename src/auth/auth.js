import * as authActions from './actions';
import { firebaseAuth } from 'src/firebase';

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
