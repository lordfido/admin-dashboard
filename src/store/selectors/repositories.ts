import { RootState } from '../types';

export const getRepositories = ({ repositories }: RootState) => repositories.collection;
