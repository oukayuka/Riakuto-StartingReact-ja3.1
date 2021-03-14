import { VFC } from 'react';
import { useQuery } from 'react-query';

import MemberList from 'components/organisms/MemberList';
import { getMembers } from 'domains/github';

const EnhancedMemberList: VFC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: users = [] } = useQuery([orgCode, 'members'], () =>
    getMembers(orgCode),
  );

  return <MemberList users={users} />;
};

export default EnhancedMemberList;
