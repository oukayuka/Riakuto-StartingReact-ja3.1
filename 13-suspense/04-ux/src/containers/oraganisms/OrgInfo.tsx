import React, { FC } from 'react';
import { useQuery } from 'react-query';

import OrgInfo from 'components/organisms/OrgInfo';
import { getOrganization } from 'domains/github';

const EnhancedOrgInfo: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: org = null } = useQuery(
    [orgCode, 'organization'],
    getOrganization,
    { enabled: orgCode.length >= 2 },
  );

  return <OrgInfo org={org} />;
};

export default EnhancedOrgInfo;
