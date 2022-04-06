import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import charactersSlice from "../store/reducers/characters";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
