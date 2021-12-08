import React from "react";
import {Gender, City, JoggingLevel, RunningGoals, Prefences } from '../models/Enums';
import DropdownGeneric from './DropdownGeneric';

const PesronalDetails: React.FC= () => {
    const gender = {
        type: 'Gender',
        options: Object.values(Gender).slice(1),
      };

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

      const  prefences= {
        type: 'Prefences',
        options: Object.values(Prefences).slice(1),
      };


    return (
      <div>
          <p>Full name</p>
          <input type="text" />
          <p>User name</p>
          <input type="text" />
          <p>Gender</p>
          <DropdownGeneric dropdownValues={gender} />
          <p>Birth Date</p>
          <input type="date" />
          <p>City</p>
          <DropdownGeneric dropdownValues={city} />
          <p>min speed</p>
          <input type="number" />
          <p>max speed</p>
          <input type="number" />
          <p>Running goals</p>
          <DropdownGeneric dropdownValues={runningGoals} />
          <p>Jogging level</p>
          <DropdownGeneric dropdownValues={joggingLevel} />
          <p>Prefences</p>
          <DropdownGeneric dropdownValues={prefences} />
          <p>A little about myself</p>
          <input type="text" />
          <div><button>Lets go!</button></div>
    </div>
    );
  };
  export default PesronalDetails;