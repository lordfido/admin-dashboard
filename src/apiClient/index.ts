import { LOGIN } from '../constants/serverRoutes';
import { UserState } from '../store/types';

const login = async (email: string, password: string): Promise<UserState | undefined> => {
  const body = {
    email,
    password
  };

  const response = await fetch(LOGIN.path, {
    method: LOGIN.method,
    body: JSON.stringify(body)
  });

  const data = await response.json();
  return data;
};

const apiClient = { users: { login } };

export default apiClient;
