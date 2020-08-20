import ky, { Options as KyOptions } from 'ky';

import { DEFAULT_API_OPTIONS } from './config';
import { isOrganization, Organization } from '../models/organization';

const getOrganization = async (
  orgCode: string,
  options?: KyOptions,
): Promise<Organization> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}`, mergedOptions);
  const organization = (await response.json()) as unknown;

  if (!isOrganization(organization)) {
    throw Error('API type error');
  }

  return organization;
};

export default getOrganization;
