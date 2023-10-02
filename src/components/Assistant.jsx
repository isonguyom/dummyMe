/* eslint-disable react/prop-types */
import { useState } from 'react';

function Assistant({positionX, positionY}) {
  const [position] = useState({ left: positionX, bottom: positionY }); // Initial position

  

  return (
    <div
      className={`on-page-assistant Assistant`}
      style={{ left: position.left, bottom: position.bottom }}
    >
      <div className="assistant-icon">
      </div>
      <div className="assistant-text">
        <p>Hello! How can I assist you today?</p>
      </div>
    </div>
  );
}

export default Assistant;
