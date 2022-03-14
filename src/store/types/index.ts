export * from './user';

export interface UserState {
  email?: string;
  userName?: string;
}

export interface RootState {
  user: UserState;
}
