import React from 'react';
import DropdownGeneric from './DropdownGeneric';
import { City, JoggingLevel, RunningGoals } from '../models/Enums';

const Filter: React.FC = () => {
  const city = {
    type: 'City',
    options: Object.values(City).slice(1),
  };

  const joggingLevel = {
    type: 'JoggingLevel',
    options: Object.values(JoggingLevel).slice(1),
  };

  const runningGoals = {
    type: 'RunningGoals',
    options: Object.values(RunningGoals).slice(1),
  };

  return (
    <div>
      <label>Filter by:</label>
      <DropdownGeneric type={city.type} options={city.options} />
      <DropdownGeneric
        type={joggingLevel.type}
        options={joggingLevel.options}
      />
      <DropdownGeneric
        type={runningGoals.type}
        options={runningGoals.options}
      />
    </div>
  );
};

export default Filter;
