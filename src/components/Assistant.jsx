/* eslint-disable react/prop-types */
// import { useState } from 'react';

function Assistant({ message, position, size }) {
  // const [message, setMessage] = useState('');

  return (
    <div className="Assistant"
      style={{
        left: `${position.x}%`,
        bottom: `${position.y}px`,
        width: `${size.x}px`,
       height: `${size.y}px`
      }}>
      <p>{message}</p>
    </div>
  );
}

export default Assistant;
