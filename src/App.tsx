import React, { useEffect, useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { DASHBOARD, ROOT } from './constants/clientRoutes';
import { guestRoutes, userRoutes } from './routes';
import { configureStore } from './store';
import { isLoggedUser } from './store/selectors';

const ConnectedApp = (): JSX.Element => {
  const navigate = useNavigate();
  const isLogged = useSelector(isLoggedUser);
  const routes = useMemo(() => isLogged
    ? userRoutes
    : guestRoutes,
  [isLogged]);

  useEffect(() => {
    if (isLogged) {
      navigate(DASHBOARD);
    } else {
      navigate(ROOT);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);
  
  return (
    <Routes>
      { routes.map(route => (
        <Route
          key={ route.path }
          path={ route.path }
          element={ <route.Component /> }
        />
      )) }
    </Routes>
  );
};

const store = configureStore();

const App = (): JSX.Element => {
  return (
    <Provider store={ store }>
      <Router>
        <ConnectedApp />
      </Router>
    </Provider>
  );
};

export default App;
