import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {City} from '../models/Enums'

const matchingProfiles = [
  {
    name: 'Avi',
    city: City.TelAviv,
    speed: 4,
    url: 'https://source.unsplash.com/user/c_v_r',
  },
  {
    name: 'Bela',
    city: City.UmAlFahem,
    speed: 3,
    url: 'https://source.unsplash.com/user/c_v_r',
  },
  {
    name: 'Bob',
    city: City.BeerSheva,
    speed: 6,
    url: 'https://source.unsplash.com/user/c_v_r',
  },
];

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    isLoggedIn: true,
    matchingProfiles: matchingProfiles,
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
