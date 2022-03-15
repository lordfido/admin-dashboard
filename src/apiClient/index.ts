import jwt from 'jwt-decode';
import { LOGIN, REPOSITORIES } from '../constants/serverRoutes';
import { createRepositoryFromServer } from '../modelCreators';
import { LoginResponse, RepositoriesResponse, Repository, UserState } from '../store/types';
import http, { customApiUrl, setAuthToken } from '../utils/fetch';

const login = async (email: string, passwd: string): Promise<UserState | undefined> => {
  const response = await http<LoginResponse>({
    method: LOGIN.method,
    path: customApiUrl(LOGIN.path),
    body: {
      email,
      password: passwd
    }
  });

  const { access_token } = response;

  setAuthToken(access_token);

  // @ts-ignore JWT response is unknown
  const { exp, iat, password, ...data } = jwt(access_token);
  return data as UserState;
};

const getData = async (): Promise<Repository[]> => {
  const data = await http<RepositoriesResponse>({
    method: REPOSITORIES.method,
    path: customApiUrl(REPOSITORIES.path)
  });

  return (data?.items ?? []).map(createRepositoryFromServer);
};

const apiClient = {
  users: { login },
  wheels: { data: getData }
};

export default apiClient;
