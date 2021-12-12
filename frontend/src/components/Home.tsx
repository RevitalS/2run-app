
import { css } from '@emotion/css';
import React from 'react';
import { Outlet } from 'react-router';
import TopBar from './topBar';

const styles = css`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 420px) {
    flex-flow: column wrap;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
`;

const Home: React.FC= () => {

  return (
    <div className={styles}>
      <TopBar/>
        <h1>This is home page!</h1>
        <Outlet/>
    </div>
  );
};

export default Home;

