import React from 'react';
import ContractedMatching from './ContractedMatching';
import { City } from '../models/Enums';
import ContractedMessege from './ContractedMessege';
import { Outlet } from 'react-router-dom';

const Inbox: React.FC = () => {

  return (
    <div>
      <h1>Inbox</h1>
      <Outlet/>
    </div>
  );
};

export default Inbox;
