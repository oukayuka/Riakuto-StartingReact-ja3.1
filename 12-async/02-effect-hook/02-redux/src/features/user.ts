import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'domains/github';

export type UserState = { users: User[] };
const initialState: UserState = { users: [] };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    membersGotten: (state, action: PayloadAction<{ users: User[] }>) => ({
      ...state,
      users: action.payload.users,
      isLoading: false,
      error: null,
    }),
  },
});
