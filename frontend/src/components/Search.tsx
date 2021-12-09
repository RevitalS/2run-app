import React, { ChangeEvent } from 'react';

interface IProps {
  searchValue: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

const Search: React.FC<IProps> = ({ searchValue }) => {
  return (
    <div>
      <label>Serach</label>
      <input
        type='text'
        id='serach'
        placeholder='Seach a Name'
        name='Serach'
        {...searchValue}
      />
    </div>
  );
};

export default Search;
