import { setupServer } from 'msw/node';
import mocks from './mocks';

export const server = setupServer(...mocks);
