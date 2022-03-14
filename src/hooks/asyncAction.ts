import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../store/types';
import { LoadingState } from '../types';

type Action = () => (dispatch: Dispatch) => Promise<void>;
type Selector<T> = (rootState: RootState) => T;

interface ReturnType<T2> {
  items: T2;
  state: LoadingState;
}

export const useAsyncAction = <T>(action: Action, selector: Selector<T>): ReturnType<T> => {
  const [state, setState] = useState<LoadingState>('idle');
  const dispatch = useDispatch();
  const items = useSelector(selector);

  const actionDispatcher = async (act: Action) => {
    setState('loading');

    try {
      await dispatch(act());
      setState('success');
    } catch {
      setState('error');
    }
  };
  
  useEffect(() => {
    actionDispatcher(action);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  return {
    items,
    state
  };
};
