import React from 'react';
// import { css, jsx} from '@emotion/react';
import { css, cx } from '@emotion/css';

const ContractedMatching: React.FC = () => {
  const color = 'white';

  const styles = css`
    display: flex;
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: ${color};
    };
    img {
      border: 1px solid black;
      border-radius: 100%;
    }
    .details {
      border: 1px solid ${color};
    }
    label { 
      background-color: yellow;
      margin: 10px;
    }
  `;

  return (
    <div className={styles}>
      <img alt='profile' />
      <div className='details'>
        <label>Name,</label>
        <label>City,</label>
        <label>Speed Range</label>
      </div>
    </div>
  );
};

export default ContractedMatching;
