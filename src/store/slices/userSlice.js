import { createSlice } from "@reduxjs/toolkit/dist/configureStore";

const initialState = {
  email:null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state , action) {
      state.email = action.payload.email
      state.token = action.payload.email
      state.id = action.payload.email
    },
    removeUser(state){
      state.email = null
      state.email = null
      state.email = null
    },
  },
});

export const { setUser, removeUser} = userSlice.action

export default userSlice.reducers;