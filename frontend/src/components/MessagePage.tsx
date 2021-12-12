import React from 'react';
import { css } from '@emotion/css';
import { useParams } from 'react-router-dom';


const styles = css`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
padding: 32px;
background-color: #41969c;
font-size: 24px;
border-radius: 4px;
img {
  border: 1px solid black;
  border-radius: 100%;
  height: 70px;
  width: 70px;
}

.title {
  align-self: flex-start;
  label {
  margin: 20px;
}
}
.chat-message {
  text-align: start;
  label {
    font-weight: bold;
  }
}
`;

const chatMessages = [
  {name: 'Tal', message: 'Hi, I would like to meet with you'},
  {name:'Avi', message: 'Nice to meet with you'},
  {name: 'Tal', message: 'What is yout spped?'},
  {name:'Avi', message: '10 kmh'},
  
]

const MessegePage: React.FC = () => {
  const params = useParams();



  return (
    <>
    <div className={styles}>
      <div className='title'>
        <img src='https://source.unsplash.com/user/c_v_r' alt='' />
          <label>{params.username}</label>
          </div>
          <div>
            {chatMessages.map((msg, i) => (
              <div className='chat-message' key={i}>
                <label>{msg.name}</label>
                <p>{msg.message}</p>
                </div>
            ))}
          </div>
          <div>
            <input type='text' placeholder='write your message'/>
        <button>Send Message</button>
        </div>
    </div>
    </>
  );
};

export default MessegePage;
