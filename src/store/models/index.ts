import { RootState } from '../types';
import { getRepositoriesInitialState } from './repositories';
import { getUserInitialState } from './user';

export * from './repositories';
export * from './user';

export const getRootInitialState = (): RootState => ({
  repositories: getRepositoriesInitialState(),
  user: getUserInitialState()
});
