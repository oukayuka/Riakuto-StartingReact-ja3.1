import React, { FC } from 'react';
import { useQuery } from 'react-query';

import MemberList from 'components/organisms/MemberList';
import { getMembers } from 'domains/github';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: users = [] } = useQuery([orgCode, 'members'], (code) =>
    getMembers(code),
  );

  return <MemberList users={users} />;
};

export default EnhancedMemberList;
