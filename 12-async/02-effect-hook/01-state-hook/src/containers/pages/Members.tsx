import { VFC, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { User, getMembers } from 'domains/github';
import Members from 'components/pages/Members';

const EnhancedMembers: VFC = () => {
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

    void load();
  }, [orgCode]);

  return <Members {...{ orgCode, users, isLoading }} />;
};

export default EnhancedMembers;
