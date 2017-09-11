import firebase from 'firebase';

export function initAuth(user) {
  return {
    type: INIT_AUTH,
    payload: user
  };
}
