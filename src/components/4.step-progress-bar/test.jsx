import React, { useState } from 'react'
import StepProgressBar from '.'

function StepProgressBarTest() {
  const [active, setActive] = useState(0)
  const steps = ['step 1', 'step 2', 'step 3', 'step 4', 'step 5'] // can be a form data that one fills and then clicks next
  return (
    <div className='mt-10 flex justify-center items-center mb-[30px] flex-col'>
      <h2>Step-Progress Bar</h2>
      <StepProgressBar steps={steps} activeStep={active} setActiveStep={setActive} />
    </div>
  )
}

export default StepProgressBarTest