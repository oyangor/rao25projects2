import { useState } from 'react'

import './App.css'
import PaginationTest from './components/1.pigination/test'
import DigitalClock from './components/2.digital-clock'
import CountDownTimerTest from './components/3.countdown-timer/test'
import StepProgressBarTest from './components/4.step-progress-bar/test'
import RandomQuoteGenerator from './components/5.random-quote-generator'



function App() {

  return (
    <div>
      <h1 className=' ml-[200px] mt-10'>25 React JS Interview Projects : Part 2</h1>
      {/* Pagination */}
      <PaginationTest />

      {/* Digital Clock */}
      <DigitalClock />

      {/* CountDownTimer */}
      <CountDownTimerTest />

      {/* Step-Progress Bar */}
      <StepProgressBarTest />

      {/* RandomQuoteGenerator */}
      <RandomQuoteGenerator />

    </div>
  )
}

export default App
