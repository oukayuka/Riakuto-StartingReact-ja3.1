import { VFC } from 'react';
import { useQueryClient } from 'react-query';

import orgCodeList from 'data/org-code-list';
import { getOrganization, getMembers } from 'domains/github';
import Members from 'components/pages/Members';

const EnhancedMembers: VFC<{ enablePrefetch?: boolean }> = ({
  enablePrefetch = false,
}) => {
  const queryClient = useQueryClient();
  const prefetch = (orgCode: string): void => {
    const load = async (): Promise<void> => {
      try {
        await Promise.all([
          queryClient.prefetchQuery([orgCode, 'organization'], () =>
            getOrganization(orgCode),
          ),
          queryClient.prefetchQuery([orgCode, 'members'], () =>
            getMembers(orgCode),
          ),
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
