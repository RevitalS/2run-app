import React from 'react';
import { css } from '@emotion/css';
import { useNavigate, useParams } from 'react-router-dom';

const MatchingProfile: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const color = 'white';

  const styles = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 32px;
    background-color: #41969c;
    font-size: 24px;
    border-radius: 4px;
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
          <label>{params.username}</label>
          <label>gender</label>
          <label>age</label>
          <label>city</label>
        </div>
        <div className='col'>
          <label>speed</label>
          <label>joggingLevel</label>
          <label>runningGoals</label>
        </div>
        <button onClick={() => {navigate(`/home/inbox/${params.username}`)}} >Send Message</button>
    </div>
    <p>about</p>
    </>
  );
};

export default MatchingProfile;
