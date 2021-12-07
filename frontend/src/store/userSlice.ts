import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      userName: '',
      profilePicture: '',
    },
  },
  reducers: {
    initUser: (
      state,
      action: PayloadAction<{ userName: string; profilePicture: string }>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;
