/* eslint-disable import/prefer-default-export */
import { Options as KyOptions } from 'ky';

export const DEFAULT_API_OPTIONS: KyOptions = {
  prefixUrl: 'https://api.github.com',
  timeout: 7000,
  retry: 2,
};
