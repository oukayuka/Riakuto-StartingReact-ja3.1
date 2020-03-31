import React, { FC } from 'react';
import { useQuery } from 'react-query';
import ky from 'ky';

import MemberList from 'components/organisms/MemberList';
import getMembers from 'domains/github/services/get-members';

const EnhancedMemberList: FC<{ orgCode: string }> = ({ orgCode }) => {
  const { data: users = [] } = useQuery([orgCode, 'members'], (code, _) =>
    getMembers(code),
  );
  if (((users as unknown) as ky.HTTPError)?.response) {
    throw users;
  }

  return <MemberList users={users} />;
};

export default EnhancedMemberList;
