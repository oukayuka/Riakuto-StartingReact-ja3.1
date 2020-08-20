/* eslint-disable no-console */
import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from './config';
import { isUsers, User } from '../models/user';
import delay from './delay';

const DELAYED_CODES = ['google'];

const getMembers = async (
  orgCode: string,
  options?: Options,
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };

  console.log(`start fetch members data: ${orgCode}`);
  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions);
  const members = DELAYED_CODES.includes(orgCode)
    ? ((await response.json().then(delay(1000))) as unknown[])
    : ((await response.json()) as unknown[]);
  console.log(`completed fetch members data: ${orgCode}`);

  if (!isUsers(members)) {
    throw Error('API type error');
  }

  return members;
};

export default getMembers;
