import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import userReducer from "./slices/userSlice"
export const store = configureStore({
  reducer:{
    user: userReducer , 
  }
});