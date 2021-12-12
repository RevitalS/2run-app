import React,{ ChangeEvent, FormEvent, useState } from 'react';
import { convertToObject, JsxEmit } from "typescript";
import { css } from '@emotion/css';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import {Gender, City, JoggingLevel, RunningGoals, Prefences } from '../models/Enums';
import { useForm } from '../hooks/useForm';
import DropdownGeneric from './DropdownGeneric';
import {IUser} from '../models/IUser'
import {initUser} from '../store/userSlice';
import { useNavigate} from 'react-router-dom';


interface IProps {
	profilePicture: string;
}

const styles = css`
    display: flex;
    flex-direction: column;

    .details{
        display: flex;
        flex-wrap: wrap;
        }
    .private{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .training{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .about{
       height : 50px;
    }`;


const PesronalDetails: React.FC<IProps> = ({profilePicture}) => {
    const navigate = useNavigate();
    const { handleSubmit, handleChange, data: user, errors } = useForm<IUser>({
        onSubmit: () => navigate(`/`),
      });
    
    const dispatch = useAppDispatch();
    //user.profilePicture=profilePicture; 
    dispatch(initUser(user));
    
    

    const gender = {
        handleChange: handleChange,
        type: 'Gender',
        options: Object.values(Gender),
        isRequired:true,
      };

    const city = {
        handleChange: handleChange,
        type: 'City',
        options: Object.values(City),
        isRequired:true,
      };
    
      const joggingLevel = {
        handleChange: handleChange,
        type: 'JoggingLevel',
        options: Object.values(JoggingLevel),
        isRequired:true,
      };
    
      const runningGoals = {
        handleChange: handleChange,
        type: 'RunningGoals',
        options: Object.values(RunningGoals),
        isRequired:true,
      };

      const  prefences= {
        handleChange: handleChange,
        type: 'Prefences',
        options: Object.values(Prefences),
        isRequired:true,
      };

      


      
    return (
        <form className={styles} onSubmit={handleSubmit}>
          <div className="details">
          <div className="private"> 

          <label>Full name</label>
            <input
            placeholder="fullName*"
            value={user.fullName || ''}
            onChange={handleChange('fullName')}
            required
            />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

            <label>User name</label>
            <input
            placeholder="userName*"
            value={user.userName || ''}
            onChange={handleChange('userName')}
            required
            />

        {errors.userName && <p className="error">{errors.userName}</p>}

          <DropdownGeneric dropdownValues={gender} />
          <label>Birth Date</label>
          <input
            type="date"
            
            onChange={handleChange('birthDate')}
            required
            />
          <DropdownGeneric dropdownValues={city} />
          </div>
          <div className="training"> 

          <label>min speed</label>
          <input
            placeholder="min speed*"
            type="number"
            value={user.minSpeed || ''}
            onChange={handleChange('minSpeed')}
            required
            />
          <label>max speed</label>
          <input
            placeholder="max speed*"
            type="number"
            value={user.maxSpeed || ''}
            onChange={handleChange('maxSpeed')}
            required
            />
          <DropdownGeneric dropdownValues={runningGoals} />
          <DropdownGeneric dropdownValues={joggingLevel} />
          <DropdownGeneric dropdownValues={prefences}/>
          </div>
          </div>
          <p>A little about myself</p>
          <input
            placeholder="a little about my self"
            type="text"
            value={user.about || ''}
            onChange={handleChange('about')}
            />
          {<div><button >Lets go!</button></div> }
    </form>
    );
  };


  export default PesronalDetails;