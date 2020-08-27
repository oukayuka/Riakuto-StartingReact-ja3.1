import React, { FC } from 'react';
import { queryCache } from 'react-query';

import orgCodeList from 'data/org-code-list';
import { getOrganization, getMembers } from 'domains/github';
import Members from 'components/pages/Members';

const EnhancedMembers: FC<{ enablePrefetch?: boolean }> = ({
  enablePrefetch = false,
}) => {
  const prefetch = (orgCode: string): void => {
    const load = async (): Promise<void> => {
      try {
        await Promise.all([
          queryCache.prefetchQuery([orgCode, 'organization'], getOrganization),
          queryCache.prefetchQuery([orgCode, 'members'], getMembers),
        ]);
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
      }
    };

    void load();
  };
  const membersProps = enablePrefetch
    ? { orgCodeList, prefetch }
    : { orgCodeList };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Members {...membersProps} />;
};

export default EnhancedMembers;
