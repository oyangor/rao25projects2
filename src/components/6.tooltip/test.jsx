import React from 'react'
import Tooltip from '.'

function ToolTipTest() {
  return (
    <div className='mt-10 mx-auto'>
      <h2 className='mb-2'>ToolTip</h2>
      <Tooltip delay={1000} content={'Tooltip Content'} children={<p className=' font-bold bg-slate-300 '>Hover Me</p>} />
    </div>
  )
}

export default ToolTipTest