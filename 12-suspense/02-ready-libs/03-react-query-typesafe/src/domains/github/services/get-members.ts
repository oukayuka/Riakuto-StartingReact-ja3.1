import ky, { Options as KyOptions } from 'ky';

import { DEFAULT_API_OPTIONS } from './constants';
import { User } from '../models/user';

const getMembers = async (
  orgCode: string,
  options?: KyOptions,
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions);
  const members: User[] = await response.json();

  return members;
};

export default getMembers;
