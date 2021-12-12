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
import UserProfile from './components/UserProfile';
import Inbox from './components/Inbox';
import MessagePage from './components/MessagePage';
import MessageList from './components/MessageList';
import { PersonalDetailsForm } from './components/PersonalDetailsForm';
import SignUp from './components/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<ListPage />} />
            <Route path='details' element={<PersonalDetailsForm />} />
            <Route path='sign-up' element={<SignUp/>} />
            <Route path='my-profile' element={<UserProfile />} />
            <Route path=':username' element={<MatchingProfile />} />
            <Route path='inbox' element={<Inbox />}>
              <Route index element={<MessageList/>}/>
              <Route path=':username' element={<MessagePage />} />
            </Route>
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
