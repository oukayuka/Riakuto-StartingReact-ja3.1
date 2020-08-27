import React, { FC } from 'react';
import { useQuery } from 'react-query';

import MemberList from 'components/organisms/MemberList';
import { getMembers } from 'domains/github';
// import getMembers from 'domains/github/services/get-members-delayed';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: users = [] } = useQuery([orgCode, 'members'], getMembers, {
    enabled: orgCode.length >= 2,
  });

  return <MemberList users={users} />;
};

export default EnhancedMemberList;
