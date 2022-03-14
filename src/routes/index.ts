import { DASHBOARD, ROOT, SETTINGS } from '../constants/clientRoutes';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import Settings from '../containers/Settings';
import { ClientRoute } from './types';

export const guestRoutes: ClientRoute[] = [
  {
    path: ROOT,
    Component: Login
  }
];

export const userRoutes: ClientRoute[] = [
  {
    path: DASHBOARD,
    Component: Dashboard
  },
  {
    path: SETTINGS,
    Component: Settings
  }
];
