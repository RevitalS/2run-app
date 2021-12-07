import React from 'react';
import Filter from './Filter';
import MatchingList from './MatchingList';
import Search from './Search';

const ListPage: React.FC = () => {
  return (
    <div>
      <h1>List Page</h1>
      <Search />
      <Filter />
      <MatchingList />
    </div>
  );
};

export default ListPage;
