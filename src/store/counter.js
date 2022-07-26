import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, displayCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state, action) {
      state.displayCounter = !state.displayCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;