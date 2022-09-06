import React, {useEffect, useState } from 'react'

const Timer = ({ setTimeOut, questionNumber }) => {

  
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true) // add the timeOut(false) default state to the parent component and here => return setTimeOut(true) that triggers to load the next question
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(15);
  }, [questionNumber]); // change the questionNumber variable at the parent component and pass that as a prop here.
  
  return ( <>
    <h4>Time to answer:</h4>
    <div className='timer'>{timer > 9 ? timer : `0`+timer}</div>
  </>
  )
}

export default Timer;
