import { configureStore } from "@reduxjs/toolkit";

import restroReducer from './restro.slice';
// Slices

 const stored = configureStore({
  reducer: {
    restro: restroReducer,
  },
  
});

export type RootState = ReturnType<typeof stored.getState>;
export type AppDispatch = typeof stored.dispatch;
export default stored
