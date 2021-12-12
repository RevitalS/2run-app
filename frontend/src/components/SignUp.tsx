import React, {useState} from 'react';
import { css } from '@emotion/css';
import Login from './Login';
import Registration from './Registration';


const styles = css`
.tab {
    overflow: hidden;
    border: 1px solid #1c96ac;
    background-color: #3fa6b8;
  }
  .tab button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    padding: 20px 16px;
    font-size: 15px;
    font-weight: bold;
  }
  .tab button:hover {
    background-color: rgb(21, 103, 117);
  }
  .tab button.active {
    background-color: rgb(42, 118, 148);
  }
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid rgb(180, 174, 174);
  }`;


const SignUp: React.FC = () => {

  const [login, setLogin] = useState(false);

  const IsLogin = (e: React.MouseEvent<HTMLButtonElement>) => { 
    setLogin(!login);
  };

	return (
        <div className={styles}>
        <div className="tab">
            <button className="tablinks" onClick={IsLogin}>Registration</button>
            <button className="tablinks" onClick={IsLogin}>Login</button>
            {login? <Login/> : <Registration/>}
        </div>
        </div>
	);
};

export default SignUp;
