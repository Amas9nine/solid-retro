<<<<<<< HEAD
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../store/slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
=======
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default configureStore({
  reducer: {
    auths: reducer
  }
>>>>>>> develop
});
