import jwtDecode from 'jwt-decode';
import { UserState } from '../store/types';

export const decodeToken = (access_token: string): UserState => {
  // @ts-ignore JWT response is unknown
  const { exp, iat, password, ...data } = jwtDecode(access_token);

  return data;
};
