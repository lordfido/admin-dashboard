import { rest } from 'msw';
import { LOGIN } from '../constants/serverRoutes';
import { LoginSuccessAction } from '../store/types';
import { RoleId } from '../types';

const loginHandler = rest[LOGIN.method](LOGIN.path, (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      email: 'mranderson@google.com',
      userName: 'Mr. Anderson',
      role: {
        id: RoleId.admin,
        name: 'Admin'
      }
    } as LoginSuccessAction['payload'])
  )
);

const apiClientHandlers = [loginHandler];

export default apiClientHandlers;
