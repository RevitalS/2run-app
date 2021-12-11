import React from "react";
import ProfilePicture from "./profilePicture"
import PersonalDetails from "./personalDetails"
import { css } from '@emotion/css';

export const PersonalDetailsForm: React.FC= () => {
    const url = 'https://source.unsplash.com/user/c_v_r'; //to change
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
    <>
    {/* <ProfilePicture/> */}

    <div className={styles}> 
        <img src={url} alt='profile' />
    </div>
    <PersonalDetails
    profilePicture={url}/>
    </>
    );

}
