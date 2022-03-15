import { decodeToken } from './jwt';

describe('jwt', () => {
  describe('decodeToken', () => {
    it('should return test user\'s info', () => {
      // eslint-disable-next-line max-len
      const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtcmFuZGVyc29uQGdvb2dsZS5jb20iLCJwYXNzd29yZCI6Im1yYW5kZXJzb24iLCJ1c2VyTmFtZSI6Ik1yLiBBbmRlcnNvbiIsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJBZG1pbiJ9LCJpYXQiOjE2NDczNjE1MjUsImV4cCI6MTY0NzQ0NzkyNX0.JYY2Ukg_plCslU4TXjwwl9rvxU62x0KqXa-V_Ch_90I';
      const data = decodeToken(access_token);

      expect(data).toStrictEqual({
        email: 'mranderson@google.com',
        userName: 'Mr. Anderson',
        id: 1,
        role: {
          id: 1,
          name: 'Admin'
        }
      });
    });
  });
});
