import { API_BASE, API_PORT } from '../constants/serverRoutes';
import { HttpMethod } from '../types';

interface Props {
  method?: HttpMethod;
  path: string;
  body?: unknown;
}

export const customApiUrl = (path: string) => `${ API_BASE }:${ API_PORT }${ path }`;

let authorization: string;

const getAuthToken = () => authorization ? `Bearer ${ authorization }` : undefined;

export const setAuthToken = (token: string) => {
  authorization = token;
};


const http = async <T>({
  body,
  method = 'get',
  path
}: Props): Promise<T> => {
  const headers = new Headers();
  
  headers.set('Content-Type', 'application/json');
  
  const authToken = getAuthToken();
  if (authToken) {
    headers.set('Authorization', authToken);
  }

  const response = await fetch(path, {
    headers,
    method: method,
    body: JSON.stringify(body)
  });

  const data = await response.json();

  return data;
};

export default http;
