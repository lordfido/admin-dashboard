import { RootState } from '../types';

export const getUserInfo = ({ user }: RootState) => user;

export const isLoggedUser = ({ user }: RootState) => !!user.email && !!user.userName;
