import React, { useState } from 'react';
import CountDownTimer from '.';

function CountDownTimerTest() {
  const [value, setValue] = useState(300); // Initial value for countdown timer
  const [clicked, setClicked] = useState(false); // State to track button click

  function handleTimeFinish() {
    console.log('Timer is finished');
  }

  function handleInputChange(event) {
    // Parse input value as integer or set to 0 if parsing fails
    const parsedValue = parseInt(event.target.value) || 0;
    setValue(parsedValue);
  }

  function handleClick() {
    setClicked(true); // Set clicked to true when button is clicked
  }

  return (
    <div className='mt-10 flex justify-center items-center mb-[30px] flex-col'>
      <h2>CountDownTimer</h2>
      <input
        type="number"
        className='bg-white border border-black rounded-lg'
        placeholder='Input Value to count down from'
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Start CountDown</button>
      {clicked && <CountDownTimer intialTime={value} onTimeFinish={handleTimeFinish} />}
    </div>
  );
}

export default CountDownTimerTest;
