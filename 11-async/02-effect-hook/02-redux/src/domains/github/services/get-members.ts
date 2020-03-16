import ky, { Options as KyOptions } from 'ky';
import { User } from '../models/user';

import { DEFAULT_API_OPTIONS } from './constants';

const getMembers = async (
  orgCode: string,
  options?: KyOptions,
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };

  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions);

  if (!response.ok) {
    throw new Error('Server Error');
  }
  const members: User[] = (await response.json()) || [];

  return members;
};

export default getMembers;
