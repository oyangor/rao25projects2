import React, { useEffect, useState } from 'react'

function DigitalClock() {
  const [time, setTime] = useState(new Date())
  //console.log(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <div className=' mt-10 flex justify-center items-center mb-[30px] flex-col'>
      <h2>DigitalClock</h2>
      <div className='border border-blue-950 inline-block mt-3'>
        <div className='time text-[30px] text-[#61dafb] mt-7 '>
          <span>{time.getHours().toString().padStart(2, '0')}</span>:
          <span>{time.getMinutes().toString().padStart(2, '0')}</span>:
          <span>{time.getSeconds().toString().padStart(2, '0')}</span>
        </div>
        <div className="date text-[25px] mt-[20px] font-semibold ">
          {
            time.toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DigitalClock