import * as React from 'react';
import { Provider } from 'urql';
import { never, fromValue } from 'wonka';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { AuthProvider } from '../../auth/auth.provider';
import Login from '../login.test';
import { FormData } from '../login.types';

afterEach(cleanup);

const mockClient: any = {
  executeQuery: jest.fn(() =>
    fromValue({
      data: {
        login: {
          token: '',
        },
      },
    }),
  ),
  executeMutation: jest.fn(() => never),
  executeSubscription: jest.fn(() => never),
};

describe('login', () => {
  describe('with invalid email', () => {
    it('renders email validation error', async () => {
      const { getByTestId } = render(
        <Provider value={mockClient}>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </Provider>,
      );
      await act(async () => {
        const passwordEl = getByTestId('password');
        const submitEl = getByTestId('submit');
        fireEvent.change(passwordEl, {
          target: {
            value: 'password',
          },
        });
        fireEvent.click(submitEl);
      });
      expect(mockClient.executeMutation).toBeCalledTimes(0);
      expect(getByTestId('userNameError')).toBeDefined();
    });
  });

  describe('with invalid password', () => {
    it('renders password validation error', async () => {
      const { getByTestId } = render(
        <Provider value={mockClient}>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </Provider>,
      );
      await act(async () => {
        const userNameEl = getByTestId('email');
        const submitEl = getByTestId('submit');
        fireEvent.change(userNameEl, {
          target: {
            value: 'username',
          },
        });
        fireEvent.click(submitEl);
      });
      expect(mockClient.executeMutation).toBeCalledTimes(0);
      expect(getByTestId('passwordError')).toBeDefined();
    });
  });

  describe('with valid input', () => {
    it('it calls api with correct variables', async () => {
      const variables: FormData = {
        userName: 'test@test.com',
        password: 'easyeasy',
      };
      const { queryByTestId, getByTestId } = render(
        <Provider value={mockClient}>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </Provider>,
      );
      const submitEl = getByTestId('submit');

      await act(async () => {
        const userNameEl = getByTestId('email');
        const passwordEl = getByTestId('password');
        fireEvent.change(userNameEl, {
          target: {
            value: variables.userName,
          },
        });
        fireEvent.change(passwordEl, {
          target: {
            value: variables.password,
          },
        });
        fireEvent.click(submitEl);
      });
      expect(queryByTestId('userNameError')).toBeNull();
      expect(queryByTestId('passwordError')).toBeNull();
      expect(mockClient.executeMutation).toBeCalledTimes(1);
      expect(mockClient.executeMutation).toBeCalledWith(expect.objectContaining({ variables }));
    });
  });
});
