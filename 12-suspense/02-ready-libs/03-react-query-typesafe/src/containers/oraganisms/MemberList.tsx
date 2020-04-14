import React, { FC } from 'react';
import { useQuery } from 'react-query';

import MemberList from 'components/organisms/MemberList';
import getMembers from 'domains/github/services/get-members';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data } = useQuery([orgCode, 'members'], (code, _) =>
    getMembers(code),
  );

  if (data?.isOk()) {
    const users = data?.value || [];

    return <MemberList users={users} />;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  throw data!.value;
};

export default EnhancedMemberList;
