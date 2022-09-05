import React, {useEffect, useState} from 'react'

function Timer() {

    const [timeLeft, setTimeLeft] = useState(30 * 1000)
    const ticker = setInterval(() => {
            setTimeLeft(timeLeft - 1000)
    }, 1000)

    useEffect(() => {
        if (timeLeft === 0) {           // When times up and the user missed to choose an answer
            clearInterval(ticker);
            // Should do something like reveal the correct answer
        }
    }, [timeLeft])


  return (
    <div className='timer'>{timeLeft} s</div>
  )
}

export default Timer
