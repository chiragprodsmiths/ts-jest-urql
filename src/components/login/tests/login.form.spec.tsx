import * as React from 'react';
import { Provider } from 'urql';
import { never, fromValue } from 'wonka';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { AuthProvider } from '../../auth/auth.provider';
import Login from '../login.test';
// import { FormData } from '../login.types';

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
  executeMutation: jest.fn(() =>
    fromValue({
      fetching: true,
      data: {
        login: {
          token: '',
        },
      },
    }),
  ),
  executeSubscription: jest.fn(() => never),
};

// const [{ fetching }, login] = useMutation<LoginResponse, FormData>(loginQuery);

describe('login', () => {
  describe('renders', () => {
    it('it renders with urql provider & auth provider', () => {
      const { container } = render(
        <Provider value={mockClient}>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </Provider>,
      );
      expect(container).toBeDefined();
    });
  });

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
      expect(getByTestId('passwordError')).toBeDefined();
    });
  });

  describe('with valid input', () => {
    it('it calls submit handler', async () => {
      const onSubmit = jest.fn((e) => {
        console.log(e);
      });
      const { getByTestId } = render(
        <Provider value={mockClient}>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </Provider>,
      );
      const submitEl = getByTestId('submit');
      submitEl.onclick = onSubmit;
      await act(async () => {
        const userNameEl = getByTestId('email');
        const passwordEl = getByTestId('password');
        fireEvent.change(userNameEl, {
          target: {
            value: 'username',
          },
        });
        fireEvent.change(passwordEl, {
          target: {
            value: 'password',
          },
        });
        fireEvent.click(submitEl);
      });
      expect(onSubmit).toBeCalled();
      expect(onSubmit).toBeCalledWith({});
    });
  });

  // describe('with valid input and input variabels', () => {
  //   it('it calls api with error response', async () => {
  //     let submitErrors = false;
  //     // mock submit handler
  //     const loginMock = async (credentials: FormData): Promise<void> => {
  //       if (credentials.userName !== 'validUserName' || credentials.password !== 'validPassword') {
  //         submitErrors = true;
  //       }
  //     };

  //     const onSubmit = jest.fn(async () => {
  //       await loginMock();
  //     });
  //     const { getByTestId } = render(
  //       <Provider value={mockClient}>
  //         <Login />
  //       </Provider>,
  //     );
  //     const submitEl = getByTestId('submit');
  //     submitEl.onclick = onSubmit;
  //     await act(async () => {
  //       const userNameEl = getByTestId('email');
  //       const passwordEl = getByTestId('password');
  //       fireEvent.change(userNameEl, {
  //         target: {
  //           value: 'username',
  //         },
  //       });
  //       fireEvent.change(passwordEl, {
  //         target: {
  //           value: 'password',
  //         },
  //       });
  //       await fireEvent.click(submitEl);
  //     });
  //     expect(submitErrors).toBeTruthy();
  //   });
  // });

  describe('with invalid credentials', () => {
    it.todo('renders server validation error');
  });
});

// describe('login', () => {
//   it('login submit', async () => {
//     describe('renders', () => {
//       it.todo('it renders with urql provider & auth provider ');
//     });
//     // render form
//     // get submit button
//     // click submit button
//     // expect submit not called if error
//     // expect submit called if no error
//     const { container } = render(
//       <Provider value={mockClient}>
//         <Login />
//       </Provider>,
//     );
//     console.log(container);
//     const submit = container.querySelector('button[(type = "submit")]');
//     console.log(submit, container);
//     expect(submit).toBeDefined();
//     // await fireEvent.click(submit);
//   });
// });
