import { createSlice } from "@reduxjs/toolkit";
import { CharactersTypes } from "../../types/characters";

type InitialStateTypes = {
  isLoading: boolean;
  data: CharactersTypes;
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    isLoading: true,
    data: {
      info: null,
      results: null,
    },
  } as InitialStateTypes,
  reducers: {
    setLoading: (state, action) => {
      const { payload } = action;

      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const { setLoading } = charactersSlice.actions;

export default charactersSlice.reducer;
