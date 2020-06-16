import React, { useState, useEffect } from 'react';

type AuthProps = {
  authenticated: boolean;
  token: string;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = React.createContext<Partial<AuthProps>>({});

export type PropTypes = {
  children: React.ReactElement | React.ReactElement[];
};

export const AuthProvider: React.FC<PropTypes> = (props: PropTypes) => {
  const prevFromLocalStorage: string | null = window.localStorage.getItem('authenticated');
  const prevAuthenticated = prevFromLocalStorage !== null ? (prevFromLocalStorage === 'true' && true) || false : false;
  const prevToken = window.localStorage.getItem('token') || '';
  const [authenticated, setAuthenticated] = useState<boolean>(prevAuthenticated);
  const [token, setToken] = useState<string>(prevToken);

  useEffect(() => {
    window.localStorage.setItem('authenticated', String(authenticated));
    window.localStorage.setItem('token', token);
  }, [authenticated, token]);

  return (
    <AuthContext.Provider value={{ authenticated, token, setAuthenticated, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
