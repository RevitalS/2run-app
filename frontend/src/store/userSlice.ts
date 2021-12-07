import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IUser} from '../models/IUser'
import {Gender, City, RunningGoals, JoggingLevel} from '../models/Enums'


interface MyUser {
  user: IUser,
}

const initialState: MyUser = {
  user: { 
    userName: '',
    fullName: '',
    gender: Gender.Init,
    birthDate: new Date(),
    city: City.Init,
    profilePicture: '',
    minSpeed: 0,
    maxSpeed: 100,
    runningGoals: RunningGoals.Init,
    joggingLevel: JoggingLevel.Init,
    GenderPreference: Gender.Init,
    about: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    initUser: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;
