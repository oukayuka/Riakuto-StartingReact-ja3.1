import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { User, getMembers } from 'domains/github';
import { userSlice, UserState } from 'features/user';

type ReturnValue = {
  users: User[];
  isLoading: boolean;
};

const useGetMembers = (orgCode: string): ReturnValue => {
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector<UserState, User[]>((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    let isUnmounted = false;
    const { membersGotten } = userSlice.actions;

    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const users = await getMembers(orgCode); // eslint-disable-line no-shadow

        if (!isUnmounted) {
          dispatch(membersGotten({ users }));
        }
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();

    return () => {
      isUnmounted = true;
    };
  }, [orgCode, dispatch]);

  return { users, isLoading };
};

export default useGetMembers;
