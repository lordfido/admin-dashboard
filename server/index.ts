import fs from 'fs';
import bodyParser from 'body-parser';
import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';
import { API_PORT, LOGIN } from '../src/constants/serverRoutes';

const userdb = JSON.parse(fs.readFileSync('./server/users.json', { encoding: 'utf-8' }));

interface User {
  email: string;
  password: string;
}

/*
 * Utility functions
 */

const SECRET_KEY = '123456789'; // Move to .env file when using real data
const expires = '24h';

const createToken = (payload: User) =>
  jwt.sign(payload, SECRET_KEY, { expiresIn: expires });

const verifyToken = (token: string) =>
  jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (decode !== undefined) {
      return decode;
    }

    return err;
  });

const getAuthUser = ({ email, password }: User) =>
  userdb.users.find((user: User) => user.email === email && user.password === password);

/*
 * JSON Server config
 */  
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');

server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server[LOGIN.method](LOGIN.path, (req, res) => {
  const { email, password } = req.body;
  const user = getAuthUser({ email, password });

  if (!user) {
    res.status(401);
    res.json({
      status: 401,
      message: 'Password for mranderson@google.com is mranderson'
    });
    return;
  }

  const access_token = createToken(user);
  res.status(200);
  res.json({ access_token });
  return;
});

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  const [bearer, token] = (req.headers.authorization ?? ' ')?.split(' ');

  if (!bearer || !token) {
    res.status(401);
    res.json({
      status: 401,
      message: 'Bad authorization header'
    });
    return;
  }

  try {
    verifyToken(token);
    next();
  } catch (err) {
    res.status(401);
    res.json({
      status: 401,
      message: 'Error: access_token is not valid'
    });
    return;
  }
});

server.use(router);

server.listen(API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Run Auth API Server');
});

export {};
