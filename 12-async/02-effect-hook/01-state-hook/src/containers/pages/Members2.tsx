import React, { FC } from 'react';
import { useParams } from 'react-router';

import useGetMembers from 'hooks/use-get-members';
import Members from 'components/pages/Members';

const EnhancedMembers: FC = () => {
  const { orgCode = '' } = useParams();
  const { users, isLoading } = useGetMembers(orgCode);

  return <Members {...{ orgCode, users, isLoading }} />;
};

export default EnhancedMembers;
