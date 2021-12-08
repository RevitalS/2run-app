import React from 'react';
import ContractedMatching from './ContractedMatching';
import { City} from '../models/Enums';

const MatchingList: React.FC = () => {

const matchingProfiles = [
  {name: 'Avi', city: City.TelAviv, speed:4, url: 'https://source.unsplash.com/user/c_v_r'},
  {name: 'Bela', city: City.UmAlFahem, speed:3 , url: 'https://source.unsplash.com/user/c_v_r'},
  {name: 'Bob', city: City.BeerSheva, speed:6 , url: 'https://source.unsplash.com/user/c_v_r'},
];


  return (
    <div>
      <h1>MatchingList</h1>
      {
        matchingProfiles.map((matching => <ContractedMatching details={matching}/>))
      }
    </div>
  );
};

export default MatchingList;
