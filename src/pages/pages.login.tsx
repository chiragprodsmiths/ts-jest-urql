import * as React from 'react';
// theme ui
import { Text, Box, Flex, Heading } from 'theme-ui';
// components
// import LoginForm from 'components/login';
import LoginFormTest from 'components/login/login.test';
// images
import SignInBg from 'images/sign-in-bg.jpg';

type PropTypes = {};

/**
 * Login Page
 */
const Login: React.FC<PropTypes> = () => {
  return (
    <Flex sx={{ bg: 'white', minHeight: '100vh', alignItems: 'center' }}>
      <Box variant="signInBg" sx={{ backgroundImage: `url(${SignInBg})` }}>
        <Box variant="signInOverlay" />
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Heading as="h1" color="white" sx={{ fontSize: 40, mb: 2, fontFamily: 'light' }}>
            Welcome
          </Heading>
          <Text color="white" sx={{ lineHeight: 'normal' }}>
            Fleet management and maintenance solution for fleets of all sizes
          </Text>
        </Box>
        <Box sx={{ position: 'absolute', bottom: 6, textAlign: 'center', width: 'calc(100% - 120px)' }}>
          <Text variant="whiteSmall">Powered by Fleet manager</Text>
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 70%' }}>
        <Box sx={{ display: 'flex', maxWidth: '40%', margin: 'auto' }}>
          {/* <LoginForm /> */}
          <LoginFormTest />
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
