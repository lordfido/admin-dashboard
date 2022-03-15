import { rest } from 'msw';
import { LOGIN, REPOSITORIES } from '../constants/serverRoutes';
import { LoginResponse, RepositoriesResponse } from '../store/types';
import { customApiUrl } from '../utils/fetch';

// eslint-disable-next-line max-len
const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtcmFuZGVyc29uQGdvb2dsZS5jb20iLCJwYXNzd29yZCI6Im1yYW5kZXJzb24iLCJ1c2VyTmFtZSI6Ik1yLiBBbmRlcnNvbiIsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJBZG1pbiJ9LCJpYXQiOjE2NDczNjE1MjUsImV4cCI6MTY0NzQ0NzkyNX0.JYY2Ukg_plCslU4TXjwwl9rvxU62x0KqXa-V_Ch_90I';

const loginHandler = rest[LOGIN.method](customApiUrl(LOGIN.path), (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({ access_token } as LoginResponse)
  );
});

const repositoriesHandler = rest[REPOSITORIES.method](customApiUrl(REPOSITORIES.path), (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      incomplete_results: false,
      items: [
        {
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
          stargazers_count: 9999,
          topics: ['code', 'challenge'],
          updated_at: '123456799',
          html_url: 'https://github.com/lordfido/admin-dashboard',
          watchers_count: 999,
          homepage: 'https://localhost:3000'
        }
      ],
      total_count: 1
    } as RepositoriesResponse)
  );
});

const apiClientHandlers = [loginHandler, repositoriesHandler];

export default apiClientHandlers;
