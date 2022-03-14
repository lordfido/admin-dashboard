import { Dispatch } from 'redux';
import apiClient from '../../apiClient';
import { LoginRequestAction, LoginSuccessAction } from '../types';

export const loginAction = (email: string, password: string) => async (dispatch: Dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' } as LoginRequestAction);

  try {
    const payload = await apiClient.users.login(email, password);
  
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload
    } as LoginSuccessAction);
  } catch (err) {
    console.error(err);
  }
};
