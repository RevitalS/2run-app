
import React from 'react';
import { Outlet } from 'react-router';

const Home: React.FC= () => {

  return (
    <div>
        <h1>This is home page!</h1>
        <Outlet/>
    </div>
  );
};

export default Home;

