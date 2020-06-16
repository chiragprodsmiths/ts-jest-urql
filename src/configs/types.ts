/**
 * types for env variables
 */
export enum NodeEnvironments {
  TEST = 'test',
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export type Config = {
  NODE_ENV: NodeEnvironments;
  API_URL: string;
};
