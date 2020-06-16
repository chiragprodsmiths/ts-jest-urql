import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from 'components/auth/auth.provider';

/**
 * Router
 * PS: using v6 alpha as it supports the
 * leaner & cleaner hooks api & migration will be easy
 * https://reacttraining.com/blog/react-router-v6-pre/
 */

type PropTypes = {
  element: React.ReactElement;
};

const ProtectedRoute: React.FC<PropTypes> = (props: PropTypes) => {
  const { authenticated } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  // if not authenticated redirect to login
  if (!authenticated) return <Navigate to="/login" replace state={{ redirect: `${pathname}${search}` }} />;

  // else render route
  return <>{props.element}</>;
};

export default ProtectedRoute;
