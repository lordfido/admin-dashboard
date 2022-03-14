import { AnyAction } from 'redux';
import { getUserInitialState } from '../models/user';
import { UserState } from '../types';

const reducer = (state = getUserInitialState(), action: AnyAction): UserState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
