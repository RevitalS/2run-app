import React, { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import Filter from './Filter';
import MatchingList from './MatchingList';
import Search from './Search';
import { useFormInput } from '../hooks/useFormInput';
import { css } from '@emotion/css';

const color = 'white';

const styles = css`
  .search {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  &:hover {
    color: ${color};
    background-color: #6de4ec;
    cursor: pointer;
  }

  @media (max-width: 420px) {
    flex-flow: column wrap;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
`;

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
      <div className='search'>
        <Search searchValue={searchValue} />
        <Filter />
      </div>
      <MatchingList matchingProfiles={getSearchedProfiles()} />
    </div>
  );
};

export default ListPage;
