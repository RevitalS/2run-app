import React from 'react';
// import { css, jsx} from '@emotion/react';
import { css, cx } from '@emotion/css';

interface IProps {
  details: any;
}

const ContractedMatching: React.FC<IProps> = (props) => {
  const {name, city, speed, url} = props.details;
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
    };
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
      <img src={url} alt='profile' />
      <div className='details'>
        <label>{name},</label>
        <label>{city},</label>
        <label>{`Avg speed ${speed} kmh`}</label>
      </div>
    </div>
  );
};

export default ContractedMatching;
