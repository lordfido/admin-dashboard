import { Dispatch } from 'redux';
import apiClient from '../../apiClient';
import { RepositoriesRequestAction, RepositoriesSuccesstAction } from '../types';

export const getRepositories = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'REPOSITORIES_REQUEST' } as RepositoriesRequestAction);

  try {
    const payload = await apiClient.wheels.data();

    dispatch({
      type: 'REPOSITORIES_SUCCESS',
      payload
    } as RepositoriesSuccesstAction);
  } catch (err) {
    console.error(err);
  }
};
