import React, { FC } from 'react';
import { queryCache } from 'react-query';

import orgCodes from 'data/org-codes';
import getOrganization from 'domains/github/services/get-organization';
import getMembers from 'domains/github/services/get-members';
import Members from 'components/pages/Members';

const EnhancedMembers: FC<{ enablePrefetch?: boolean }> = ({
  enablePrefetch = false,
}) => {
  const prefetch = (orgCode: string): void => {
    const load = async (): Promise<void> => {
      try {
        await Promise.all([
          queryCache.prefetchQuery(orgCode, getOrganization),
          queryCache.prefetchQuery([orgCode, 'members'], (code, _) =>
            getMembers(code),
          ),
        ]);
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
      }
    };

    load();
  };
  const props = enablePrefetch ? { orgCodes, prefetch } : { orgCodes };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Members {...props} />;
};

export default EnhancedMembers;
