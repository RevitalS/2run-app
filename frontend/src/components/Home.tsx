
import React from 'react';
import { Outlet } from 'react-router';
import TopBar from './topBar';
import '../App.css';

const Home: React.FC= () => {

  return (
    <div className='App'>
      <TopBar/>
        <h1>This is home page!</h1>
        <Outlet/>
    </div>
  );
};

export default Home;

