import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "login",
  initialState: {
    login: []
  },
  reducers: {
    addUser(state, action) {
      state.login.push({
        id: action.payload.id,
        email: action.payload.email
      });
    }
  }
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
