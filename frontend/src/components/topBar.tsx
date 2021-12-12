import React, { Component } from 'react';
import { css } from '@emotion/css';
import Home from './Home';
import { useAppSelector } from '../store/hooks';
import ProfilePicture from "./profilePicture"
import { NavLink } from 'react-router-dom';

const styles = css`
    height: 30px;
    position: sticky;
    top: 0;
    left: 0;
    background: #5796a1;
    color: #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
        justify-content: flex-start;
    }
    .login{
        justify-content: flex-end;
    }
    .navbar-rightSide{
        display: flex;
        align-items: center;
    }
    img {
        display: flex;
        justify-content: flex-start;
        border: 1px solid black;
        border-radius: 100%;
        height: 30px;
        width: 30px;
      }
  `;

  
const TopBar: React.FC= () => {

  const isLoggedIn = useAppSelector((state) => state.config.isLoggedIn);
  const url=useAppSelector((state) => state.user.user.profilePicture);
  
  
    return (
      <div className={styles}>
        <NavLink to={'/'}>2-Run</NavLink>
        {isLoggedIn ? 
         <ul className="navbar-rightSide">
        <NavLink to={'/inbox'} className="navbar-inbox">Inbox</NavLink>
        <img src={url} alt='profile' />
         <button className="navbar-logout">Log out</button>
       </ul>
        : <label className="login">log in</label>
        }
      </div>
    );
  }


export default TopBar;