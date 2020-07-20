import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { User } from 'domains/github/models/user';
import { userSlice, UserState } from 'redux/user';
import getMembers from 'domains/github/services/get-members';

type ReturnValue = {
  users: User[];
  isLoading: boolean;
};

const useMembersGot = (orgCode: string): ReturnValue => {
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector<UserState, User[]>(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    let isUnmounted = false;

    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const users = await getMembers(orgCode); // eslint-disable-line no-shadow

        if (!isUnmounted) {
          dispatch(userSlice.actions.membersGot({ users }));
        }
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    load();

    return () => {
      isUnmounted = true;
    };
  }, [orgCode, dispatch]);

  return { users, isLoading };
};

export default useMembersGot;
