import React, { useState } from 'react'

function Tooltip({ children, content, delay }) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className=' relative inline-block'
      onMouseEnter={() => setTimeout(() => { setIsVisible(true) }, delay || 50)}
      onMouseLeave={() => setTimeout(() => { setIsVisible(false) }, 50)}
    >
      {children}
      {
        isVisible ? <div className='absolute top-[calc(-100%-50px)] transform bg-black text-white p-[15px] rounded-[8px] text-[18px] text-nowrap '>{content}</div> : null
      }
    </div>
  )
}

export default Tooltip