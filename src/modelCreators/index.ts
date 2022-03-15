import { Repository, RepositoryFromServer } from '../store/types';

export const createRepositoryFromServer = ({
  created_at,
  forks,
  homepage,
  html_url,
  id,
  name,
  owner: {
    avatar_url,
    id: ownerId,
    login,
    site_admin,
    url: ownerUrl
  },
  stargazers_count,
  topics,
  updated_at,
  watchers_count
}: RepositoryFromServer): Repository => ({
  created_at,
  forks,
  id,
  name,
  owner: {
    avatar_url,
    id: ownerId,
    login,
    site_admin,
    url: ownerUrl
  },
  score: stargazers_count,
  topics,
  updated_at,
  url: html_url,
  watchers: watchers_count,
  website: homepage
});
