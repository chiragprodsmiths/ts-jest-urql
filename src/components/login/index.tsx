import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Spinner, Button, Label, Input, Text, Box, Flex, Link, Image, Heading } from 'theme-ui';
import { useMutation } from 'urql';
/**
 * app components
 */
import { AuthContext } from 'components/auth/auth.provider';
import { EnumButtonVariants } from 'theme/theme.variants.buttons';
import { CustomVariants } from 'theme/theme.variants';
import Modal from 'components/modal';
import RequestAnAccount from 'components/request-an-account';
/**
 * images
 */
import fleetLogo from 'images/logo.png';
import { loginQuery } from 'queries/queries.login';
import { FormData, LoginResponse } from './login.types';
import { validationSchema } from './login.validation';

/**
 * prop types
 */
type PropTypes = {};

const Login: React.FC<PropTypes> = () => {
  const { setAuthenticated, setToken } = useContext(AuthContext);
  const [loginResult, setLoginResult] = useState<LoginResponse>({ login: { token: '' } });
  const [loginErrors, setLoginErrors] = useState<boolean>(false);
  const [openRequestAnAccount, toggleRequestAnAccountModal] = useState<boolean>(false);

  // react hook form => types(FormData)
  const { register, handleSubmit, errors, watch } = useForm<FormData>({ validationSchema });

  // setup login mutation => types => mutation(loginResponse, loginRequest)
  const [{ fetching }, login] = useMutation<LoginResponse, FormData>(loginQuery);

  const { userName: watchedUserName, password: watchedPassword } = watch();

  // using this effect to clear submit errors if any of the field changes after error
  useEffect(() => {
    setLoginErrors(false);
  }, [watchedUserName, watchedPassword]);

  // open register account modal
  const onRequestAnAccountOpen = (): void => {
    toggleRequestAnAccountModal(true);
  };

  // close register account modal
  const onRequestAnAccountClose = (): void => {
    toggleRequestAnAccountModal(false);
  };

  // login form submit
  const onLoginSubmit = async (credentials: FormData): Promise<void> => {
    const { data, error } = await login(credentials);
    if (error || !data || data === null) {
      setLoginErrors(true);
      return;
    }
    setLoginResult(data);
    if (setAuthenticated && setToken) {
      setAuthenticated(true);
      setToken(data.login.token);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Box sx={{ mb: 10 }}>
          <Flex sx={{ alignItems: 'center' }}>
            <Image src={fleetLogo} variant="logo" />
            <Heading color="logoText" sx={{ fontFamily: 'semiBold' }}>
              BRAND LOGO
            </Heading>
          </Flex>
        </Box>
        <Heading as="h1" sx={{ mb: 10 }}>
          Sign in
        </Heading>
        <Box variant="inputWrap">
          <Input
            id="email"
            type="email"
            name="userName"
            placeholder="Email"
            autoComplete="email"
            autoFocus
            ref={register}
            aria-invalid={errors?.userName ? 'true' : 'false'}
            aria-describedby="userNameError"
            variant={errors?.userName ? 'inputError' : 'input'}
          />
          <Label htmlFor="email">Email</Label>
          {errors?.userName && (
            <Text id="userNameError" variant="inputError">
              {errors?.userName?.message}
            </Text>
          )}
        </Box>
        <Flex sx={{ justifyContent: 'flex-end', position: 'relative' }}>
          <Link variant="secondarySmall" tabIndex={-1} href="/#" sx={{ position: 'absolute', right: 0, bottom: '6px' }}>
            Forgot your password?
          </Link>
        </Flex>
        <Box variant="inputWrap">
          <Input
            variant={errors?.password ? 'inputError' : 'input'}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            ref={register}
            aria-invalid={errors?.password ? 'true' : 'false'}
            aria-describedby="passwordError"
          />
          <Label htmlFor="password">Password</Label>
          {errors?.password && (
            <Text id="passwordError" variant="inputError">
              {errors?.password?.message}
            </Text>
          )}
          {/* TODO: @chirag to map below error to urql error message */}
          {loginErrors && (
            <Text id="submitError" variant="inputError">
              Invalid email or password
            </Text>
          )}
        </Box>
        <Box variant="inputWrap">
          <Button variant={EnumButtonVariants.PRIMARY} type="submit" disabled={fetching}>
            Sign in
            {fetching && <Spinner variant={CustomVariants.BUTTON_LOADER_PRIMARY} />}
          </Button>
        </Box>
        <Text sx={{ color: 'textLight', fontSize: 1 }}>
          Don't have an Account ?{' '}
          <Button variant={EnumButtonVariants.LINK} type="button" onClick={onRequestAnAccountOpen}>
            Request an account
          </Button>
        </Text>
        <pre>{JSON.stringify(loginResult, null, 2)}</pre>
      </form>
      <Modal visible={openRequestAnAccount} title="Request an Account" onClose={onRequestAnAccountClose}>
        <Box pb={10}>
          <Text variant="secondaryRegular" sx={{ lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.
          </Text>
        </Box>
        <Box>
          <RequestAnAccount />
        </Box>
      </Modal>
    </>
  );
};

export default Login;
