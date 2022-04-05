import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "storeManage",
  initialState: {
    jwt: "null",
  },
  reducers: {
    updateJwt: (state, action) => {
      state.jwt = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateJwt } = counterSlice.actions;

export default counterSlice.reducer;
