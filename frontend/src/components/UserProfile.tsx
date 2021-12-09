import React from 'react';
import { css } from '@emotion/css';
import { useParams } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const params = useParams();
  const color = 'white';

  const styles = css`
    display: flex;
    flex-wrap: wrap;
    padding: 32px;
    background-color: #41969c;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: ${color};
      background-color: #9be7ec;
      cursor: pointer;
    }
    img {
      border: 1px solid black;
      border-radius: 100%;
      height: 100px;
      width: 100px;
    }
    .col {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      grid-area: main;
    }
    label {
      margin: 5px;
    }
    button {
      width: 100px;
      height: 50px;
    }
  `;

  return (
    <>
    <div className={styles}>
        <img src='https://source.unsplash.com/user/c_v_r' alt='' />
        <div className='col'>
          <label>{`Name: ${params.username}`}</label>
          <label>Gengder: gender</label>
          <label>Age: age</label>
          <label>City: city</label>
        </div>
        <div className='col'>
          <label>Spped: speed</label>
          <label>JoggingLevel: joggingLevel</label>
          <label>RunningGoals: runningGoals</label>
        </div>
        <button>edit</button>
    </div>
    <p>about</p>
    <label>I would like to run with: Everyone</label>
    </>
  );
};

export default UserProfile;
