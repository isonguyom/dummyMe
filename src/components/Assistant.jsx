/* eslint-disable react/prop-types */
// import { useState } from 'react';

function Assistant({ message, position }) {
  // const [message, setMessage] = useState('');

  return (
    <div className="Assistant"
      style={{
        left: `${position.x}px`,
        bottom: `${position.y}px`,
      }}>
      <div className="assistant-text-container">
        <p className="assistant-text">{message}</p>
      </div>
      <img src="assistant.gif" alt="assistant"
      />
    </div>
  );
}

export default Assistant;
