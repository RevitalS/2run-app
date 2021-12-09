import React from 'react';
import { Outlet } from 'react-router-dom';

const Inbox: React.FC = () => {

  return (
    <div>
      <h1>Inbox</h1>
      <Outlet/>
    </div>
  );
};

export default Inbox;
