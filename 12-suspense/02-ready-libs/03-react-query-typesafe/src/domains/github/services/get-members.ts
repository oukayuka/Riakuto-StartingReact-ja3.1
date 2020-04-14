import ky, { Options as KyOptions } from 'ky';

import { Result, Success, Failure } from 'utils/result';
import { DEFAULT_API_OPTIONS } from './constants';
import { User } from '../models/user';

const getMembers = async (
  orgCode: string,
  options?: KyOptions,
): Promise<Result<User[], ky.HTTPError>> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions);

  if (!response.ok) {
    return new Failure(new ky.HTTPError(response));
  }

  const members: User[] = await response.json();

  return new Success(members);
};

export default getMembers;
