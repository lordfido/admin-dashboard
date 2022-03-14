import { HttpMethod } from '../types';

interface ServerRoute {
  method: HttpMethod;
  path: string;
}

export const LOGIN: ServerRoute = {
  method: 'post',
  path: '/login'
};
