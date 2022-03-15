import { LOGIN, REPOSITORIES } from '../constants/serverRoutes';
import { createRepositoryFromServer } from '../modelCreators';
import { LoginResponse, RepositoriesResponse, Repository, UserState } from '../store/types';
import http, { customApiUrl, setAuthToken } from '../utils/fetch';
import { decodeToken } from '../utils/jwt';

const login = async (email: string, passwd: string): Promise<UserState | undefined> => {
  const { access_token } = await http<LoginResponse>({
    method: LOGIN.method,
    path: customApiUrl(LOGIN.path),
    body: {
      email,
      password: passwd
    }
  });

  setAuthToken(access_token);
  const data = decodeToken(access_token);
  return data;
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
