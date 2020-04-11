import ky, { Options as KyOptions } from 'ky';

import { DEFAULT_API_OPTIONS } from './constants';
import { User } from '../models/user';
import delay from './delay';

const DELAYED_CODES = ['google'];

const getMembers = async (
  orgCode: string,
  options?: KyOptions,
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions);
  const members: User[] = DELAYED_CODES.includes(orgCode)
    ? await response.json().then(delay(1000))
    : await response.json();

  return members;
};

export default getMembers;
