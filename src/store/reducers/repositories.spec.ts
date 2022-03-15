import { getRepositoriesInitialState } from '../models';
import { Repository } from '../types';
import reducer from './repositories';

describe('repositories reducer', () => {
  describe('initialization', () => {
    it('should return a valid inital state', () => {
      const initialState = getRepositoriesInitialState();
      const state = reducer(undefined, { type: 'REPOSITORIES_REQUEST' });
      expect(state).toStrictEqual(initialState);
    });
  });

  describe('REPOSITORIES_SUCCESS', () => {
    it('should store new repository', () => {
      const repo: Repository = {
        created_at: '123456789',
        forks: 99,
        id: 1,
        name: 'Test repository',
        owner: {
          // eslint-disable-next-line max-len
          avatar_url: 'https://media-exp1.licdn.com/dms/image/C4D03AQFQg-a04pMUqg/profile-displayphoto-shrink_200_200/0/1516746971616?e=1652918400&v=beta&t=h6HMxsjhOTOwmjFlRaXgQLMFS8Q9Uu9zbzRkorQNHoo',
          id: 10,
          login: 'rperez',
          site_admin: true,
          url: 'https://www.imperdiblesoft.com'
        },
        score: 9999,
        topics: ['code', 'challenge'],
        updated_at: '123456799',
        url: 'https://github.com/lordfido/admin-dashboard',
        watchers: 999,
        website: 'https://localhost:3000'
      };

      const initialState = getRepositoriesInitialState();
      const state = reducer(initialState, { type: 'REPOSITORIES_SUCCESS', payload: [repo] });

      expect(state).toStrictEqual({ collection: [repo] });
    });
  });
});
