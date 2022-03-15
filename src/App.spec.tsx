import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('Initial render', () => {
    it('should render login form', () => {
      render(<App />);

      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Sign In');
    });
  });

  describe('when login form has been submitted', () => {
    it('should render the secret dashboard', async () => {
      render(<App />);

      fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'mranderson@google.com' } });
      fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'mranderson' } });
      fireEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText('Secret dashboard')).toBeInTheDocument();
      });
    });
  });
});
