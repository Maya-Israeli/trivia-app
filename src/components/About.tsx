import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC<{}> = () => {
  return (
    <div>
      <div>
        <p>This is about page</p>
      </div>

      <div>
        <Link to='questions'>Start Game</Link>
      </div>
    </div>
  );
};

export default About;
