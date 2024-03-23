import React from "react";
import { useState } from "react";

function TipCalculator() {
  const [billAmout, setBillAmount] = useState(0)
  const [tipPercentage, seTipPercentage] = useState(10)
  const [splitCount, setSplitCount] = useState(1)
  const [tipAmount, setTipAmount] = useState(null)
  const [error, setError] = useState(null)

  function handleCalculateTip() {
    if (!billAmout || billAmout <= 0 || !tipPercentage || tipPercentage <= 0) {
      setError('Please Enter valid value for Bill amount & Tip percentage')
      return
    }

    const bill = parseFloat(billAmout)
    const tip = (bill * tipPercentage) / 100
    const tipPerPerson = tip / splitCount
    const totalAmount = bill + tip
    const totalAmountPerPerson = totalAmount / splitCount

    setTipAmount(
      {
        totalAmount: totalAmount.toFixed(2),
        tipPerPerson: tipPerPerson.toFixed(2),
        totalAmountPerPerson: totalAmountPerPerson.toFixed(2)
      }
    )
    setError('')
  }

  return (
    <div className="mt-10 mx-auto flex justify-center items-center mb-[30px] flex-col ">
      <h2 className="mb-2"> TipCalculator</h2>
      <div className=" flex flex-col gap-5 justify-between mt-5 font-bold">
        <div className="flex justify-between items-center gap-4">
          <label>Bill Amount</label>
          <input value={billAmout} onChange={(e) => setBillAmount(e.target.value)} type="number" className="border border-solid font-normal border-black rounded-md h-5 p-0 m-0 appearance-none bg-transparent" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <label>Tip percentage</label>
          <input value={tipPercentage} onChange={(e) => seTipPercentage(e.target.value)} type="number" className="border border-solid border-black font-normal rounded-md h-5 p-0 m-0 appearance-none bg-transparent" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <label>No of people</label>
          <input value={splitCount} onChange={(e) => setSplitCount(e.target.value)} type="number" className="border border-solid border-black font-normal rounded-md h-5 p-0 m-0 appearance-none bg-transparent" />
        </div>
        <button onClick={handleCalculateTip} className=" w-[50%] ml-[6rem] ">Calculate tip</button>
      </div>
      {
        error
          ? <h3>{error}</h3>
          : null
      }
      {
        tipAmount && !error
          ? <div className="font-bold flex justify-center flex-col items-center">
            <p>Total Amount: ${tipAmount.totalAmount}</p>
            <p>Tip Per Person: ${tipAmount.tipPerPerson}</p>
            <p>Total Amount Per Person: ${tipAmount.totalAmountPerPerson}</p>

          </div>
          : null
      }
    </div>
  );
}

export default TipCalculator;
