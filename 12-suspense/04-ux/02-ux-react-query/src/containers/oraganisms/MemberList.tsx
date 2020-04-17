import React, { FC } from 'react';
import { useQuery } from 'react-query';

import MemberList from 'components/organisms/MemberList';
import getMembers from 'domains/github/services/get-members';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: users = [] } = useQuery(
    orgCode.length > 2 ? [orgCode, 'members'] : null,
    (code, _) => getMembers(code),
  );

  return <MemberList users={users} />;
};

export default EnhancedMemberList;
