import { getUserInitialState } from '../models/user';
import { LoginAction, UserState } from '../types';

const reducer = (state = getUserInitialState(), action: LoginAction): UserState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default reducer;
