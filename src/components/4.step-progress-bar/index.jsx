import React from 'react'
import './progress.css'

function StepProgressBar({ steps, activeStep, setActiveStep }) {
  function handlePrevStep() {
    setActiveStep(prevStep => Math.max(prevStep - 1, 0))
  }
  function handleNextStep() {
    setActiveStep(prevStep => Math.min(prevStep + 1, steps.length - 1))
  }
  function calculateCurrentStepWidth() {
    return `${100 / (steps.length - 1) * activeStep}%`
  }
  // console.log(calculateCurrentStepWidth());

  return (
    <div className=' w-full '>
      <div className='steps flex justify-between items-center m-auto bg-[#f0f0f0] rounded-[8px] p-[10px] '>
        {
          steps && steps.length > 0
            ? steps.map((stepItem, i) => <div className={`flex grow-[1] h-full items-center justify-center font-[500] bg-[#2196f3] p-[10px] rounded-[8px] ${i <= activeStep ? ' bg-[#4caf50] text-white ' : ''}`} style={{ width: calculateCurrentStepWidth() }} key={i}>{stepItem}</div>)
            : null
        }
      </div>
      <div className="btns-wrapper flex justify-center items-center">
        <button onClick={handlePrevStep} disabled={activeStep === 0} className={`${activeStep === 0 ? ' opacity-[0.65] cursor-not-allowed' : ''}`}>Prev Step</button>
        <button onClick={handleNextStep} disabled={activeStep === steps.length - 1} className={`${activeStep === steps.length - 1 ? ' opacity-[0.65] cursor-not-allowed' : ''}`}>Next Step</button>
      </div>
    </div>
  )
}

export default StepProgressBar