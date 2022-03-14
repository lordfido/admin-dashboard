import {
  createStore,
  applyMiddleware,
  Store,
  Action,
  compose,
  StoreEnhancer,
  Middleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { RootState } from './types';

const createMiddlewareEnhancer = () => {
  const middlewares: Middleware[] = [thunk];

  return applyMiddleware(...middlewares);
};

const createEnhacer = (): StoreEnhancer => {
  const enhancers: StoreEnhancer[] = [];
  enhancers.push(createMiddlewareEnhancer());

  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(...enhancers);
  }

  return compose(...enhancers);
};

export const configureStore = (initialState?: Partial<RootState>): Store<RootState, Action> => {
  const store = createStore(rootReducer, initialState as RootState, createEnhacer());
  return store;
};
