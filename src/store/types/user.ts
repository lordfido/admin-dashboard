export interface LoginRequestAction {
  type: 'LOGIN_REQUEST'
}

export interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS',
  payload: {
    email: string;
    userName: string;
  }
}

export type LoginAction = LoginRequestAction | LoginSuccessAction;
