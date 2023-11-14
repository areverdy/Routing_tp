import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
