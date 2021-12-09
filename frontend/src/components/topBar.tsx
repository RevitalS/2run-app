import React, { Component } from 'react';
import { css } from '@emotion/css';
import Home from './Home';
// import { useAppSelector } from './store/hooks';

const TopBar: React.FC= () => {

// const isLoggedIn = useAppSelector((state) => state.config.isLoggedIn);
  const styles = css`
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
  `;
  
    return (
      <div className={styles}>
        <a href={"/"}>2-Run</a>
        <label className="login">log in</label>
      </div>
    );
  }


export default TopBar;