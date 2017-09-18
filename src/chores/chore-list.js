import { FirebaseList } from '../../src/firebase';
import * as choreActions from './actions';
import { Chore } from './chore';

export const choreList = new FirebaseList({
  onAdd: choreActions.createChoreSuccess,
  onChange: choreActions.updateChoreSuccess,
  onLoad: choreActions.loadChoresSuccess,
  onRemove: choreActions.removeChoreSuccess
}, Chore);
