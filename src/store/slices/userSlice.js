import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  id: localStorage.getItem("authId")
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setAuth(state, action) {
      state.id = action.payload;
    },
    removeUser(state) {
      state.user = null;
      localStorage.setItem("user", "");
    }
  }
});

export const { setUser, removeUser, setAuth } = userSlice.actions;

export default userSlice.reducer;
