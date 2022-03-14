import { HttpMethod } from '../types';

interface Props {
  method?: HttpMethod;
  path: string;
  body?: unknown;
}

const http = async <T>({
  body,
  method = 'get',
  path
}: Props): Promise<T> => {
  const response = await fetch(path, {
    method: method,
    body: JSON.stringify(body)
  });

  const data = await response.json();

  return data;
};

export default http;
