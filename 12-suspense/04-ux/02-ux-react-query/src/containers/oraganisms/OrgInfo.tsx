import React, { FC } from 'react';
import { useQuery } from 'react-query';

import OrgInfo from 'components/organisms/OrgInfo';
import getOrganization from 'domains/github/services/get-organization';

const EnhancedOrgInfo: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: org = null } = useQuery(
    orgCode.length > 2 ? orgCode : null,
    getOrganization,
  );

  return <OrgInfo org={org} />;
};

export default EnhancedOrgInfo;
