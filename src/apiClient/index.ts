import { LOGIN } from '../constants/serverRoutes';
import { createRepositoryFromServer } from '../modelCreators';
import { RepositoriesResponse, Repository, UserState } from '../store/types';
import http from '../utils/fetch';

const login = async (email: string, password: string): Promise<UserState | undefined> => {
  const data = await http<UserState>({
    ...LOGIN,
    body: {
      email,
      password
    }
  });

  return data;
};

const getData = async (): Promise<Repository[]> => {
  const data = await http<RepositoriesResponse>({
    // If this were an API, this URL should be also abstracted
    path: 'https://api.github.com/search/repositories?sort=stars&q=react'
  });

  return (data?.items ?? []).map(createRepositoryFromServer);
};

const apiClient = {
  users: { login },
  wheels: { data: getData }
};

export default apiClient;
