import React, { useState } from 'react';
import DropdownGeneric from './DropdownGeneric';
import { City, JoggingLevel, RunningGoals } from '../models/Enums';
import { css } from '@emotion/css';
import FilterIcon from '../icons/filter.svg';
import { useForm } from '../hooks/useForm';
import { IUser } from '../models/IUser';

const style = css`
  display: flex;
  flex-direction: wrap;
  background-color: #b7ecf0;
  border: 1px solid #f3e6e6;
`;

const clickble = css`
    cursor: pointer;
    &:hover {
    background-color: #c4d5e9;
    }
`;

const Filter: React.FC = () => {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { handleSubmit, handleChange, data: user, errors } = useForm<IUser>({
    onSubmit: () => alert('User submitted!'),
  });
  const city = {
    handleChange: handleChange,
    type: 'City',
    options: Object.values(City),
    isRequired:false,
  };

  const joggingLevel = {
    handleChange: handleChange,
    type: 'JoggingLevel',
    options: Object.values(JoggingLevel),
    isRequired:false,
  };

  const runningGoals = {
    handleChange: handleChange,
    type: 'RunningGoals',
    options: Object.values(RunningGoals),
    isRequired:false,
  };



  return (
    <>
      <img src={FilterIcon} className={clickble} alt='filter by' onClick={() => {setIsFilterOpen(!isFilterOpen)}}/> 
      {isFilterOpen &&
      <div className={style}>
      <label>Filter by:</label>
      <form onSubmit={handleSubmit}>
        <DropdownGeneric dropdownValues={city} />
        <label>Min Speed</label>
        <input type='number' onChange={handleChange('minSpeed')}/>
        <label>Max Speed</label>
        <input type='number' onChange={handleChange('maxSpeed')}/>
        <DropdownGeneric dropdownValues={joggingLevel} />
        <DropdownGeneric dropdownValues={runningGoals} />
        <button type='submit'>Filter</button>
      </form>
    </div>
}
    </>
  );
};

export default Filter;
