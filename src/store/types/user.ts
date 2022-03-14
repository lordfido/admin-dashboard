import { RoleId } from '../../types';

interface Role {
  id: RoleId;
  name: string;
}

export interface UserState {
  email?: string;
  userName?: string;
  role?: Role;
}

export interface LoginRequestAction {
  type: 'LOGIN_REQUEST'
}

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS',
  payload: {
    email: string;
    userName: string;
    role: Role;
  }
}

export type LoginAction = LoginRequestAction | LoginSuccessAction;
