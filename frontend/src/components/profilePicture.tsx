import React from "react";
import { css } from '@emotion/css';

const ProfilePicture: React.FC= () => {
    const url = 'https://source.unsplash.com/user/c_v_r';
    const styles = css`
    img {
        display: flex;
        justify-content: flex-start;
        border: 1px solid black;
        border-radius: 100%;
        height: 100px;
        width: 100px;
      }`;

    return (
      <div className={styles}> 
          <img src={url} alt='profile' />
      </div>
    );
  };
  export default ProfilePicture;