import React, { FC } from 'react';
import useSWR from 'swr';

import OrgInfo from 'components/organisms/OrgInfo';
import getOrganization from 'domains/github/services/get-organization';

const EnhancedOrgInfo: FC<{ orgCode: string }> = ({ orgCode }) => {
  const key = `orgs/${orgCode}`;
  const { data: org = null } = useSWR(
    orgCode && orgCode.length >= 3 ? key : null,
    () => getOrganization(orgCode),
  );

  return <OrgInfo org={org} />;
};

export default EnhancedOrgInfo;
