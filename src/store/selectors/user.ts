import { RootState } from '../types';

export const getUserinfo = ({ user }: RootState) => user;

export const isLoggedUser = ({ user }: RootState) => !!user.email && !!user.userName;
