import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
  user: null
=======
  email: null,
  id: localStorage.getItem("authId")
>>>>>>> develop
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
<<<<<<< HEAD
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
=======
      state.email = action.payload.email;
      state.id = action.payload.id;
>>>>>>> develop
    },
    removeUser(state) {
      state.user = null;
      localStorage.setItem("user","")
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
