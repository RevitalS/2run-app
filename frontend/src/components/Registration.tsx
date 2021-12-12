import React from 'react';
import { useForm } from '../hooks/useForm';
import {ILoginUser} from '../models/IUser'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {initlogUser} from '../store/userSlice';
import {loginToggle} from '../store/configSlice'
import { css } from '@emotion/css';
import { useNavigate} from 'react-router-dom';

const styles = css`
    display: flex;
    justify-content: center;

    .details{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        }`;

const Registration: React.FC= () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { handleSubmit, handleChange, data: userLogin, errors } = useForm<ILoginUser>({
        onSubmit: () => {
            console.log('login');
            dispatch(loginToggle);
            
            navigate(`/home/details`)},
        
      });
      dispatch(initlogUser(userLogin));
      
      
      return (
        <form className={styles} onSubmit={handleSubmit} >
        <div className="details">

        <label>UserName</label>
            <input
            placeholder="UserName*"
            value={userLogin.userName || ''}
            onChange={handleChange('userName')}
            required
            />
        {errors.userName && <p className="error">{errors.userName}</p>}

            <label>Password</label>
            <input
            placeholder="password*"
            type="password"
            value={userLogin.password || ''}
            onChange={handleChange('password')}
            required
            />

        {errors.password && <p className="error">{errors.password}</p>}

        <label>Re-Password</label>
            <input
            placeholder="Re-password*"
            type="password"
            required
            />

        {errors.password && <p className="error">{errors.password}</p>}

        <div><button>Create account</button></div> 
        </div>
    </form>

      );
    }
    export default Registration;