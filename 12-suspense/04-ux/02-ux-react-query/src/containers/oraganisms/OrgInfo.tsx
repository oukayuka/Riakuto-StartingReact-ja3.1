import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { Success, withResult } from 'utils/result-type';
import OrgInfo from 'components/organisms/OrgInfo';
import getOrganization from 'domains/github/services/get-organization';

const EnhancedOrgInfo: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data = new Success(null) } = useQuery(
    orgCode.length > 2 ? orgCode : null,
    withResult(getOrganization),
  );

  if (data.isError()) throw data.error;

  return <OrgInfo org={data.value} />;
};

export default EnhancedOrgInfo;
