import ky, { Options as KyOptions } from 'ky';

import { DEFAULT_API_OPTIONS } from './constants';
import { Organization } from '../models/organization';

const getOrganization = async (
  orgCode: string,
  options?: KyOptions,
): Promise<Organization> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}`, mergedOptions);
  const org: Organization = await response.json();

  return org;
};

export default getOrganization;
