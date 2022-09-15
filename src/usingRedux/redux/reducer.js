import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  childCount: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    increaseByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

export const {increment, decrement, increaseByAmount} = counterSlice.actions;
export default counterSlice.reducer;