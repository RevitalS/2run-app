import React from 'react';
import DropdownGeneric from './DropdownGeneric';
import {City} from '../models/Enums'

const Filter: React.FC = () => {

const city = {
  type: 'city',
  options: Object.values(City).slice(1),
}

  return <div>
    <label>Filter by:</label>
     <DropdownGeneric type={city.type} options={city.options}/>
  </div>;
};

export default Filter;
