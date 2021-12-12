import React from 'react';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

interface IProps {
  details: any;
}

const color = 'white';

const styles = css`
  display: flex;
  align-items: center;
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

  @media (max-width: 470px) {
    flex-flow: column wrap;
    img {
      height: 50px;
      width: 50px;
    }
    font-size: 16px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 0px;
  }
`;

const ContractedMatching: React.FC<IProps> = (props) => {
  const { name, city, speed, url } = props.details;
  let navigate = useNavigate();


  return (
    <div
      className={styles}
      onClick={() => {
        navigate(`${name}`);
      }}
    >
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
