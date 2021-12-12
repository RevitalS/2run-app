import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ILoginUser, IUser} from '../models/IUser'
import {Gender, City, RunningGoals, JoggingLevel} from '../models/Enums'


interface MyUser {
  user: IUser,
  loginUser: ILoginUser
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
  loginUser: {
    userName: '',
    password: '',
    token: '',
  }
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
    initlogUser: (
      state,
      action: PayloadAction<ILoginUser>
    ) => {
      state.loginUser = action.payload;
    },
  },
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;
