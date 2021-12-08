import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MatchingProfile from './components/MatchingProfile';
import ListPage from './components/ListPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route index element={<ListPage/>}/>
        <Route path=':username' element={<MatchingProfile/>}/>
          {/* <Route index element={</>}/>
          {/*
          <Route path='inbox' element={<Inbox />} />
          <Route path='*' element={<Navigate to='/'/>}/>
          <Route path=':username' element={<MathcingUserProfile/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
