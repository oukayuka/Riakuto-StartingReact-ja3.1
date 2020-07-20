import { useEffect, useState } from 'react';

import { User } from 'domains/github/models/user';
import getMembers from 'domains/github/services/get-members';

type ReturnValue = {
  users: User[];
  isLoading: boolean;
};

const useMembersGot = (orgCode: string): ReturnValue => {
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

  return { users, isLoading };
};

export default useMembersGot;
