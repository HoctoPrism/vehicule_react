import { createSlice } from '@reduxjs/toolkit'

export const tirageArraySlice = createSlice({
  name: 'tirageArray',
  initialState: [],
  reducers: {
    setTirageArray: (state = tirageArraySlice.getInitialState(), action) => {
      state.length = 0;
      state.push(action.payload);
    },
    resetTirageArray: (state) => {
      state.length = 0;
    }
  },
})

export const { setTirageArray, resetTirageArray } = tirageArraySlice.actions

export default tirageArraySlice.reducer