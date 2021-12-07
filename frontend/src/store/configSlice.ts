import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const configSlice = createSlice({
  name: 'config',
  initialState: {
    isLoggedIn: false,
    matchingProfiles: [],
  },
  reducers: {
    initeMatchingProfiles: (
      state,
      action: PayloadAction<[]>
    ) => {
      state.matchingProfiles = action.payload;
    },
    loginToggle: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    }
  },
});

export const { initeMatchingProfiles, } = configSlice.actions;

export default configSlice.reducer;
