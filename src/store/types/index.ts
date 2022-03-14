import { RepositoriesState } from './repositories';
import { UserState } from './user';

export * from './repositories';
export * from './user';

export interface RootState {
  repositories: RepositoriesState;
  user: UserState;
}
