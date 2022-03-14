import { rest } from 'msw';

export enum RoleId {
  admin = 1,
  user = 2,
}

export type RoleNames = Record<RoleId, string>;

export type HttpMethod = Exclude<keyof typeof rest, 'all' | 'head' | 'options'>;

export type LoadingState<T = 'loading'> = 'idle' | T | 'success' | 'error';
