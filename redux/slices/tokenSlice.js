import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "initialtokenvalue",
  },
  reducers: {
    // actions
    setToken: (state, action) => {
      state.value = action.payload;
    },
    removeToken: (state) => {
      state.value = "";
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
