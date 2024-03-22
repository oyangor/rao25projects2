import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

export default function CountDownTimer({ intialTime, onTimeFinish, }) {
  const [time, setTime] = useState(intialTime)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef()

  //console.log(intialTime);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(intervalRef.current)
            setIsRunning(false)

            if (onTimeFinish) {
              onTimeFinish()
            }

            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isRunning, onTimeFinish])

  function handlePauseAndResume() {
    // setIsRunning(!isRunning)
    setIsRunning(prevIsRunning => !prevIsRunning)
  }

  function handleReset() {
    setIsRunning(false)
    clearInterval(intervalRef.current)
    setTime(intialTime)
  }

  function handleStart() {
    setIsRunning(true)

  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <div className=' mt-2'>
      <p className='font-semibold text-[20px] ml-[8rem] '>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      <div>
        <button onClick={handlePauseAndResume}>{isRunning ? 'Pause' : 'Resume'}</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStart}>Start</button>
      </div>

    </div>
  )
}
