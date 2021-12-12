
import React from 'react';
import { useNavigate} from 'react-router-dom';

const Cover: React.FC= () => {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Find Someone to Run With </h1>
        <button onClick={()=>{navigate('/sign-up')}}>Let's Start!</button>
    </div>
  );
};

export default Cover;
