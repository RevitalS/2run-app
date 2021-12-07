import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { useAppSelector } from './store/hooks';

function App() {
  const isLoggedIn = useAppSelector((state) => state.config.isLoggedIn);
  return <div className='App'>{!isLoggedIn ? <Welcome /> : <Home />}</div>;
}

export default App;
