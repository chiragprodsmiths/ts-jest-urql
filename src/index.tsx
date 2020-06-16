import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'urql';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'components/app/app';
import { AuthProvider } from 'components/auth/auth.provider';
import { apiClient } from './api/apiClient';

/**
 * TODO: number of exchanges to configure
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider value={apiClient}>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
