import React from 'react';
import ContractedMatching from './ContractedMatching';
import { City } from '../models/Enums';
import ContractedMessege from './ContractedMessege';

const MessegeList: React.FC = () => {
  const matchingProfiles = [
    {
      name: 'Mali',
      message: 'Hi, lets run',
      url: 'https://source.unsplash.com/user/c_v_r',
    },
    {
      name: 'Shay',
      message: 'Hi, where do you run?',
      url: 'https://source.unsplash.com/user/c_v_r',
    },
    {
      name: 'Ben',
      message: 'Hi, run fast!',
      url: 'https://source.unsplash.com/user/c_v_r',
    },
  ];

  return (
    <div>
      {matchingProfiles.map((matching, i) => (
        <ContractedMessege key={i} details={matching} />
      ))}
    </div>
  );
};

export default MessegeList;
