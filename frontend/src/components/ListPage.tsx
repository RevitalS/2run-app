import React, { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import Filter from './Filter';
import MatchingList from './MatchingList';
import Search from './Search';
import { useFormInput } from '../hooks/useFormInput';
import { css } from '@emotion/css';

const color = 'white';

const styles = css`
  width: 80%;
  margin: 5px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  .search {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    * {
      margin: 10px;
    }
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
    <div className={styles}>
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
