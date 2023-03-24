import { configureStore, } from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import restroReducer from "./restro.slice";
// Here all the reducers are stored

const stored = configureStore({
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
  reducer: {
    restro: restroReducer,
    user:userReducer,
    
  },
 
});
// The root state is a type which represents the state of entire Redux store.
/*  The getState function returns the current state of the store, which is an
 object that represents the current values of all the reducers combined.*/
export type RootState = ReturnType<typeof stored.getState>;
/* AppDispatch is set to the type of the store's dispatch function,
 which is the type that is used to dispatch actions to the store.*/
export type AppDispatch = typeof stored.dispatch;
export default stored;
