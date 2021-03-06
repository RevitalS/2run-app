import {Gender, City, RunningGoals, JoggingLevel} from './Enums'

export interface IUser {
  userName: string;
  fullName: string;
  gender: Gender;
  birthDate: Date | null;
  city: City;
  profilePicture: string;
  minSpeed: number;
  maxSpeed: number;
  runningGoals: RunningGoals;
  joggingLevel: JoggingLevel;
  GenderPreference: Gender;
  about: string;
}



export interface ILoginUser {
  userName: string;
  password: string;
  token: string;
}