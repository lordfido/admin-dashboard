import { Repository, RootState } from '../types';
import { getRepositories } from './repositories';

describe('repositories selectors', () => {
  describe('getRepositories', () => {
    it('should return a list with one repository', () => {
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

      const rootState: RootState = {
        repositories: { collection: [repo] },
        user: {}
      };

      const repositories = getRepositories(rootState);
      expect(repositories).toStrictEqual([repo]);
    });
  });
});
