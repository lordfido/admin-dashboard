import { UserState } from './user';

export * from './user';

export interface RootState {
  user: UserState;
}
