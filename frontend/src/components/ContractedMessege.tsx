import React from 'react';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

interface IProps {
  details: any;
}

const ContractedMessege: React.FC<IProps> = (props) => {
  const { name, message,url } = props.details;
  let navigate = useNavigate();
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
    <div className={styles} onClick={() => {navigate(`${name}`)}}>
      <img src={url} alt='profile' />
      <div className='details'>
        <label>{name},</label>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ContractedMessege;
