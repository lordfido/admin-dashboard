import { RootState } from '../types';
import { getUserInitialState } from './user';

export const getRootInitialState = (): RootState => ({ user: getUserInitialState() });
