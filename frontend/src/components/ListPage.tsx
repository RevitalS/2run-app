import React, { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import Filter from './Filter';
import MatchingList from './MatchingList';
import Search from './Search';
import { useFormInput } from '../hooks/useFormInput';

const ListPage: React.FC = () => {
  const searchValue = useFormInput('');

  const matchingProfiles = useAppSelector(
    (state) => state.config.matchingProfiles
  );

  const getSearchedProfiles = () => {
    return matchingProfiles.filter(
      (profile) =>
        searchValue.value === '' ||
        profile.name.toLowerCase().includes(searchValue.value.toLowerCase())
    );
  };

  return (
    <div>
      <h1>List Page</h1>
      <p>{searchValue.value}</p>
      <Search searchValue={searchValue} />
      <Filter />
      <MatchingList matchingProfiles={getSearchedProfiles()} />
    </div>
  );
};

export default ListPage;
