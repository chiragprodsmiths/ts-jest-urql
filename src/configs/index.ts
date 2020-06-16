import * as dotenv from 'dotenv';
import { Config, NodeEnvironments } from './types';

dotenv.config({
  path: process.env.ENV_FILE,
});

export const config: Config = {
  NODE_ENV: (process.env.NODE_ENV as NodeEnvironments) || NodeEnvironments.DEVELOPMENT,
  API_URL: process.env.API_URL || '',
};
