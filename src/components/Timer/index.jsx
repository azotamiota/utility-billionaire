import React, {useEffect, useState } from 'react'

const Timer = ({ timeOut, questionNumber }) => {

  
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer === 0) return timeOut() 
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, timeOut]);

  useEffect(() => {
    setTimer(5);
  }, [questionNumber]); 
  
  return ( <>
    <h4>Time to answer:</h4>
    <div className='timer'>{timer > 9 ? timer : `0`+timer}</div>
  </>
  )
}

export default Timer;
