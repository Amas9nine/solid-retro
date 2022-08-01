import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: localStorage.getItem("authId")
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.email = null;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
