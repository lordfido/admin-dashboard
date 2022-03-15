import { RootState, UserState } from '../types';
import { getUserInfo, isLoggedUser } from './user';

describe('user selectors', () => {
  const user: UserState = {
    email: 'mranderson@google.com',
    id: 1,
    role: {
      id: 1,
      name: 'Admin'
    },
    userName: 'Mr. Anderson test'
  };

  const rootState: RootState = {
    repositories: { collection: [] },
    user
  };

  describe('getUserInfo', () => {
    it('should return user\'s info', () => {
      const userInfo = getUserInfo(rootState);
      expect(userInfo).toStrictEqual(user);
    });
  });

  describe('isLoggedUser', () => {
    it('should return true', () => {
      const isLogged = isLoggedUser(rootState);
      expect(isLogged).toBeTruthy();
    });

    it('should return false', () => {
      const isLogged = isLoggedUser({ ...rootState, user: {} });
      expect(isLogged).toBeFalsy();
    });
  });
});
