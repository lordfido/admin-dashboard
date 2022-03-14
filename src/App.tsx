import React, { useEffect, useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GuestLayout from './components/Layout/GuestLayout';
import MainLayout from './components/Layout/MainLayout';
import { DASHBOARD, ROOT } from './constants/clientRoutes';
import { guestRoutes, userRoutes } from './routes';
import { configureStore } from './store';
import { isLoggedUser } from './store/selectors';

const ConnectedApp = (): JSX.Element => {
  const navigate = useNavigate();
  const isLogged = useSelector(isLoggedUser);
  const { Layout, routes } = useMemo(() => isLogged
    ? {
      Layout: MainLayout,
      routes: userRoutes
    }
    : {
      Layout: GuestLayout,
      routes: guestRoutes
    },
  [isLogged]);

  useEffect(() => {
    if (isLogged) {
      navigate(DASHBOARD);
    } else {
      navigate(ROOT);
    }
  }, [isLogged, navigate]);
  
  return (
    <Layout>
      <Routes>
        { routes.map(route => (
          <Route
            key={ route.path }
            path={ route.path }
            element={ <route.Component /> }
          />
        )) }
      </Routes>
    </Layout>
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
