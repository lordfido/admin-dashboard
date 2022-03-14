import { getRepositoriesInitialState } from '../models';
import { RepositoriesAction, RepositoriesState } from '../types';

const reducer = (state = getRepositoriesInitialState(), action: RepositoriesAction): RepositoriesState => {
  switch (action.type) {
    case 'REPOSITORIES_SUCCESS':
      return {
        ...state,
        collection: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
