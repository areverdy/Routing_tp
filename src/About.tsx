import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();

    const handleGoHome = useCallback(() => {
        navigate("/home")
    }, [navigate])
    
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default About;
