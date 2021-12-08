import React from 'react';
import { css } from '@emotion/css';

const MatchingProfile: React.FC = () => {
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
        <img />
        <div className='col'>
          <label>Name</label>
          <label>gender</label>
          <label>age</label>
          <label>city</label>
        </div>
        <div className='col'>
          <label>speed</label>
          <label>joggingLevel</label>
          <label>runningGoals</label>
        </div>
        <button>Send Message</button>
    </div>
    <p>about</p>
    </>
  );
};

export default MatchingProfile;
