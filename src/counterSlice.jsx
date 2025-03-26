import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, stack: [] };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    },
    push: (state, action) => {
      state.stack.push(action.payload);
    },
    pop: (state) => {
      if (state.stack.length > 0) {
        state.stack.pop();
      }
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;