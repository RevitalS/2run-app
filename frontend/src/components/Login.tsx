import React from 'react';
import { ILoginUser } from '../models/IUser';
import { css } from '@emotion/css';
import { useForm } from '../hooks/useForm'


const styles = css`
    display: flex;
    justify-content: center;

    .details{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }`;

export const Login: React.FC= () => {

    
    return (

        <form className={styles} >
        <div className="details">

        <label>UserName</label>
            <input
            placeholder="UserName*"
            required
            />

            <label>Password</label>
            <input
            placeholder="password*"
            type="password"
            required
            />

        <div><button >Log in</button></div> 
        </div>
    </form>

    );
  }

export default Login;