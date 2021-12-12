import React from 'react';
import { initUser } from '../store/userSlice';
import {IUser} from '../models/IUser'
import { userInfo } from 'os';

interface IProps {
    dropdownValues: {
    handleChange: Function;
    type: string;
    options: Array<string>;
    isRequired: boolean;
    }
}

const DropdownGeneric: React.FC<IProps> = (props) => {
    const {handleChange, type, options, isRequired} = props.dropdownValues;
  return (
      <>
      <label htmlFor={type}>{type}</label>
      <select onChange={handleChange(type)} required={isRequired} name={type} id={type} >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
      </select>
      </>
  );
};

export default DropdownGeneric;
