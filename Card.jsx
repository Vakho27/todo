/* eslint-disable no-unused-vars */
// import flowerPic from "./assets/download.jpg"

import React, { useState } from 'react';

function Card() {
  const [inputText, setInputText] = useState('');
  const [secondCardText, setSecondCardText] = useState('');

  const handleButtonClick = () => {
    setSecondCardText(inputText);
  };

  return (
    <div className="Card">
      <img className="card-image" src="https://www.figma.com/file/SYvVOCG8qzk4FfKQThtc5e/Todo-UI-(Community)?type=design&node-id=1-120&mode=design&t=5V6uxPcrUCO2LT1m-4" alt="Profile" />
      <h4>thur 9</h4>
      <p className="cart-time">6:23 AM</p>
      <input
        className="card-text"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="card-button" onClick={handleButtonClick}>
        +
      </button>
      <div className="second-card">
        {secondCardText && (
          <>
            <p className="card-text1"> <h4>thur 9</h4>
            <p className="card-time">6:23 AM</p>
                {secondCardText}</p>

          </>
        )}
      </div>
    </div>
  );
}

export default Card;
