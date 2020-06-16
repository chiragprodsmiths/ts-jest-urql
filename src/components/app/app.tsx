import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'theme';
import { AuthContext } from 'components/auth/auth.provider';
import AppLayout from 'components/layout/layout.app';
import PublicLayout from 'components/layout/layout.public';
import NotFound from 'pages/pages.404';
import Login from 'pages/pages.login';
import AllComponents from 'pages/pages.components';
import Home from 'pages/pages.home';
import BrandRouter from 'router/router.brand';
import PublicRoute from 'router/router.public';
import ProtectedRoute from 'router/router.protected';

type Props = {};

export const App: React.FC<Props> = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={authenticated ? <AppLayout /> : <PublicLayout />}>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="login" element={<PublicRoute element={<Login />} />} />
          <Route path="signup" element={<PublicRoute element={<Login />} />} />
          <Route path="components" element={<AllComponents />} />
          <Route path="brands/*" element={<BrandRouter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
