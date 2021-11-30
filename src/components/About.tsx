import React from 'react';
import { Link } from 'react-router-dom';
import { SpecialButton } from './Main';

const About: React.FC<{}> = () => {
  return (
    <div>
      <div>

      <p>Welcome to my trivia game!</p>
      <p>Click start game in order to start playing</p>

      </div>

      <div>
        <Link to='/questions/1'>Start Game</Link>
      </div>
    </div>
  );
};

export default About;
