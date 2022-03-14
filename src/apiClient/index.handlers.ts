import { rest } from 'msw';
import { LOGIN } from '../constants/serverRoutes';

const loginHandler = rest[LOGIN.method](LOGIN.path, (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.json({
      email: 'mranderson@google.com',
      userName: 'Mr. Anderson'
    })
  )
);

const apiClientHandlers = [loginHandler];

export default apiClientHandlers;
