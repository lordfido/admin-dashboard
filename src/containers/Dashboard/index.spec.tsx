import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '.';
import { configureStore } from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const renderWithStore = (Component: JSX.Element) => {
  const store = configureStore();

  return render(
    <BrowserRouter>
      <Provider store={ store }>
        { Component }
      </Provider>
    </BrowserRouter>
  );
};

describe('Dashboard contanier', () => {
  describe('when mounted', () => {
    it('should not have any item', () => {
      renderWithStore(<Dashboard />);

      expect(screen.getByText('Secret dashboard')).toBeInTheDocument();
      expect(screen.queryByText('Test repository')).not.toBeInTheDocument();
    });
  });

  describe('after network request has been completed', () => {
    it('should render 1 repository', async () => {
      renderWithStore(<Dashboard />);

      expect(screen.queryByText('Test repository')).not.toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByText('Test repository')).toBeInTheDocument();
      });

      expect(screen.getByText('Test repository')).toBeInTheDocument();
      expect(screen.getByText('rperez')).toBeInTheDocument();

      expect(screen.getByAltText('rperez\'s image')).toBeInTheDocument();
      expect(screen.getByText('https://localhost:3000')).toBeInTheDocument();
      expect(screen.getByText('https://github.com/lordfido/admin-dashboard')).toBeInTheDocument();

      expect(screen.getByText('Stars: 9,999')).toBeInTheDocument();
      expect(screen.getByText('Forks: 99')).toBeInTheDocument();
      expect(screen.getByText('Watchers: 999')).toBeInTheDocument();
    });
  });
});
