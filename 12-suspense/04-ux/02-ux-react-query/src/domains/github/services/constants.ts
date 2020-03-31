/* eslint-disable import/prefer-default-export */
import { Options as KyOptions } from 'ky';

export const DEFAULT_API_OPTIONS: KyOptions = {
  prefixUrl: 'https://api.github.com',
  throwHttpErrors: false,
  timeout: 3000,
  retry: 2,
};
