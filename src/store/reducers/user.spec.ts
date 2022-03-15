import { getUserInitialState } from '../models';
import reducer from './user';

describe('user reducer', () => {
  describe('initialization', () => {
    it('should return a valid inital state', () => {
      const initialState = getUserInitialState();
      const state = reducer(undefined, { type: 'LOGIN_REQUEST' });
      expect(state).toStrictEqual(initialState);
    });
  });

  describe('LOGIN_SUCCESS', () => {
    it('should store new user', () => {
      const user = {
        email: 'mranderson@google.com',
        role: {
          id: 1,
          name: 'Admin'
        },
        userName: 'Mr. Anderson test'
      };

      const initialState = getUserInitialState();
      const state = reducer(initialState, {
        type: 'LOGIN_SUCCESS', payload: {
          email: user.email,
          role: user.role,
          userName: user.userName
        } 
      });

      expect(state).toStrictEqual({ ...user });
    });
  });
});
