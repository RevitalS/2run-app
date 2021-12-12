import React from 'react';
import ContractedMatching from './ContractedMatching';

interface IProps {
  matchingProfiles: Array<any>;
}

const MatchingList: React.FC<IProps> = ({ matchingProfiles }) => {
  return (
    <>
      {matchingProfiles.map((matching, i) => (
        <ContractedMatching key={i} details={matching} />
      ))}
    </>
  );
};

export default MatchingList;
