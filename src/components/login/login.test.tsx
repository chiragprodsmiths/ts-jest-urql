/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'urql';
/**
 * app components
 */
import { AuthContext } from 'components/auth/auth.provider';
/**
 * images
 */
import { loginQuery } from 'queries/queries.login';
import { FormData, LoginResponse } from './login.types';
import { validationSchema } from './login.validation';

/**
 * prop types
 */
type PropTypes = {};

const Login: React.FC<PropTypes> = () => {
  const { setAuthenticated, setToken } = useContext(AuthContext);
  const [loginErrors, setLoginErrors] = useState<boolean>(false);

  // react hook form => types(FormData)
  const { register, handleSubmit, errors, watch } = useForm<FormData>({ validationSchema });

  // setup login mutation => types => mutation(loginResponse, loginRequest)
  const [{ fetching }, login] = useMutation<LoginResponse, FormData>(loginQuery);

  const { userName: watchedUserName, password: watchedPassword } = watch();

  // using this effect to clear submit errors if any of the field changes after error
  useEffect(() => {
    setLoginErrors(false);
  }, [watchedUserName, watchedPassword]);

  // login form submit
  const onLoginSubmit = async (credentials: FormData): Promise<void> => {
    const { data, error } = await login(credentials);
    if (error || !data || data === null) {
      setLoginErrors(true);
      return;
    }
    if (setAuthenticated && setToken) {
      setAuthenticated(true);
      setToken(data.login.token);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="userName"
            placeholder="Email"
            autoComplete="email"
            ref={register}
            aria-invalid={errors?.userName ? 'true' : 'false'}
            aria-describedby="userNameError"
            data-testid="email"
          />
          {errors?.userName && (
            <p id="userNameError" data-testid="userNameError">
              {errors?.userName?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            ref={register}
            aria-invalid={errors?.password ? 'true' : 'false'}
            aria-describedby="passwordError"
            data-testid="password"
          />
          {errors?.password && (
            <p id="passwordError" data-testid="passwordError">
              {errors?.password?.message}
            </p>
          )}
          {loginErrors && (
            <p id="submitError" data-testid="submitError">
              Invalid email or password
            </p>
          )}
        </div>
        <div>
          <button type="submit" disabled={fetching} data-testid="submit">
            Sign in
            {fetching && 'Loading...'}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
