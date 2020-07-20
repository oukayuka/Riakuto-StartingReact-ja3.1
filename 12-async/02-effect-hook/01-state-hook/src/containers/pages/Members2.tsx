import React, { FC } from 'react';
import { useParams } from 'react-router';

import useMembersGot from 'hooks/use-members-got';
import Members from 'components/pages/Members';

const EnhancedMembers: FC = () => {
  const { orgCode = '' } = useParams();
  const { users, isLoading } = useMembersGot(orgCode);

  return <Members {...{ orgCode, users, isLoading }} />;
};

export default EnhancedMembers;
