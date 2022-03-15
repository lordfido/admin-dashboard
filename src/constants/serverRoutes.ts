import { HttpMethod } from '../types';

interface ServerRoute {
  method: HttpMethod;
  path: string;
}

export const API_BASE = 'http://localhost';
export const API_PORT = 3001;

export const LOGIN: ServerRoute = {
  method: 'post',
  path: '/auth/login'
};

export const REPOSITORIES: ServerRoute = {
  method: 'get',
  path: '/repositories'
};
