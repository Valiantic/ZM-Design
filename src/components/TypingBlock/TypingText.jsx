import React from 'react';
import Typewriter from 'typewriter-effect';
import './TypingText.css';

const TypingText = () => {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            'Civil Engineering Student',
            'Freelance CAD Operator',
            'Interior Designer'
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypingText;
