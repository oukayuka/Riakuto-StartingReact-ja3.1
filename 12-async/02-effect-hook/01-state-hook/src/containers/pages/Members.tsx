import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { User } from 'domains/github/models/user';
import Members from 'components/pages/Members';
import getMembers from 'domains/github/services/get-members';

const EnhancedMembers: FC = () => {
  const { orgCode = '' } = useParams();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const usersData = await getMembers(orgCode);
        setUsers(usersData);
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [orgCode]);

  return <Members {...{ orgCode, users, isLoading }} />;
};

export default EnhancedMembers;
