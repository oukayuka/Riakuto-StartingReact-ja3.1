import React, { FC } from 'react';
import { mutate } from 'swr';

import orgCodes from 'data/org-codes';
import getOrganization from 'domains/github/services/get-organization';
import getMembers from 'domains/github/services/get-members';
import Members from 'components/pages/Members';

const prefetch = (orgCode: string): void => {
  const load = async (): Promise<void> => {
    try {
      mutate(`orgs/${orgCode}`, getOrganization(orgCode), false);
      mutate(`orgs/${orgCode}/members`, getMembers(orgCode), false);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  };

  load();
};
const EnhancedMembers: FC = () => <Members {...{ orgCodes, prefetch }} />;

export default EnhancedMembers;
