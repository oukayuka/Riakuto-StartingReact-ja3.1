import React, { FC, useState } from 'react';
import { mutate } from 'swr';

import orgCodes from 'data/org-codes';
import getOrganization from 'domains/github/services/get-organization';
import getMembers from 'domains/github/services/get-members';
import Members from 'components/pages/Members';

const EnhancedMembers: FC<{ enablePrefetch?: boolean }> = ({
  enablePrefetch = false,
}) => {
  const [fetchedCodes, setFetchedCodes] = useState<string[]>([]);
  const prefetch = (orgCode: string): void => {
    const load = async (): Promise<void> => {
      try {
        await Promise.all([
          mutate(`orgs/${orgCode}`, getOrganization(orgCode), false),
          mutate(`orgs/${orgCode}/members`, getMembers(orgCode), false),
        ]);
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
      }
    };

    if (!fetchedCodes.includes(orgCode)) {
      load();
      setFetchedCodes(fetchedCodes.concat([orgCode]));
    }
  };
  const props = enablePrefetch ? { orgCodes, prefetch } : { orgCodes };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Members {...props} />;
};

export default EnhancedMembers;
