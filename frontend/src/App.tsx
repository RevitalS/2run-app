import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { useAppSelector } from './store/hooks';
import { PersonalDetailsForm } from './components/PersonalDetailsForm';
import TopBar from './components/topBar';

// {!isLoggedIn ? <Welcome /> : <Home />}
function App() {
  const isLoggedIn = useAppSelector((state) => state.config.isLoggedIn);
  return <div className='App'>
    <TopBar/>
    <PersonalDetailsForm/>
    </div>;
}

export default App;
