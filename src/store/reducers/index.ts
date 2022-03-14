import { combineReducers, Reducer } from 'redux';
import { RootState } from '../types';
import userReducer from './user';

const rootReducer = combineReducers({ user: userReducer }) as unknown as Reducer<RootState>;

export default rootReducer;
