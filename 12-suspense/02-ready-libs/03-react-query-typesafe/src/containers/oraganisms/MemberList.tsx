import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { Success, withResult } from 'utils/result-type';
import MemberList from 'components/organisms/MemberList';
import getMembers from 'domains/github/services/get-members';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data = new Success([]) } = useQuery([orgCode, 'members'], (code, _) =>
    withResult(getMembers)(code),
  );

  if (data.isError()) throw data.error;

  return <MemberList users={data.value} />;
};

export default EnhancedMemberList;
