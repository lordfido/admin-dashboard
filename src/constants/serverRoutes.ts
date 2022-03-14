import { rest } from 'msw';

interface ServerRoute {
  method: Exclude<keyof typeof rest, 'all' | 'head' | 'options'>;
  path: string;
}

export const LOGIN: ServerRoute = {
  method: 'post',
  path: '/login'
};
