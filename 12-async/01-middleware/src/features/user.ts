import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'domains/github';
import { SucceededPayload, FailedPayload } from './payload-types';

export type UserState = {
  users: User[];
  isLoading: boolean;
  error?: Error | null;
};

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

type GetMembersParams = { orgCode: string };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getMembersStarted: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      action: PayloadAction<GetMembersParams>,
    ) => ({
      ...state,
      users: [],
      isLoading: true,
    }),
    getMembersSucceeded: (
      state,
      action: PayloadAction<
        SucceededPayload<GetMembersParams, { users: User[] }>
      >,
    ) => ({
      ...state,
      users: action.payload.result.users,
      isLoading: false,
      error: null,
    }),
    getMembersFailed: (
      state,
      action: PayloadAction<FailedPayload<GetMembersParams, Error>>,
    ) => ({
      ...state,
      isLoading: false,
      error: action.payload.error,
    }),
  },
});
