import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 } as CounterState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: state => ({ ...state, count: state.count - 1 }),
    incremented: state => ({ ...state, count: state.count + 1 }),
  },
});
