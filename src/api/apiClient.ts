import { createClient, defaultExchanges } from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { config } from 'configs';
import { NodeEnvironments } from 'configs/types';
import { Headers } from './types';

const isDev = config.NODE_ENV === NodeEnvironments.DEVELOPMENT;

/**
 * devtools
 */
const devTools = isDev ? [devtoolsExchange] : [];

/**
 * exchanges
 */
const exchanges = [...devTools, ...defaultExchanges];

// fetch options
const fetchOptions = (): Headers => {
  const token: string | null = window.localStorage.getItem('token');
  if (token && token !== null) {
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  }
  return {};
};

/**
 * client
 */
export const apiClient = createClient({ url: config.API_URL, exchanges, fetchOptions });
