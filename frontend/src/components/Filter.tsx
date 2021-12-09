import React, { useState } from 'react';
import DropdownGeneric from './DropdownGeneric';
import { City, JoggingLevel, RunningGoals } from '../models/Enums';
import { css } from '@emotion/css';
import FilterIcon from '../icons/filter.svg';

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

  const city = {
    handleChange: ()=>{},
    type: 'City',
    options: Object.values(City).slice(1),
  };

  const joggingLevel = {
    handleChange: ()=>{},
    type: 'JoggingLevel',
    options: Object.values(JoggingLevel).slice(1),
  };

  const runningGoals = {
    handleChange: ()=>{},
    type: 'RunningGoals',
    options: Object.values(RunningGoals).slice(1),
  };

  return (
    <>
      <img src={FilterIcon} className={clickble} alt='filter by' onClick={() => {setIsFilterOpen(!isFilterOpen)}}/> 
      {isFilterOpen &&
      <div className={style}>
      <label>Filter by:</label>
      <form >
        <DropdownGeneric dropdownValues={city} />
        <label>Min Speed</label>
        <input type='number' />
        <label>Max Speed</label>
        <input type='number' />
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
