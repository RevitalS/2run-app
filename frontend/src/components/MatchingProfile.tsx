import React from 'react';
import { css } from '@emotion/css';


const MatchingProfile: React.FC = () => {
  const color = 'white';

  const styles = css`
    display: flex;
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
    .details {
      display: flex;
      flex-wrap: wrap;
    }
    label {
      margin: 5px;
    }
  `;

  return (
    <div className={styles}>
      MatchingProfile
    </div>
  );
};

export default MatchingProfile;
