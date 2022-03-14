import { combineReducers, Reducer } from 'redux';
import { RootState } from '../types';
import repositoriesReducer from './repositories';
import userReducer from './user';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  user: userReducer
}) as unknown as Reducer<RootState>;

export default rootReducer;
