import React, { useEffect, useState } from 'react'

function CurrencyConverter() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFormCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('KES')
  const [exchangeRate, setExchangeRate] = useState()
  const [convertedAmount, setConvertedAmount] = useState(0)

  async function fetchExchangeRate() {
    const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`,
      {
        method: 'GET'
      }
    )
    const result = await res.json()
    const calculateRate = result?.rates[toCurrency]
    // console.log(calculateRate);
    setExchangeRate((calculateRate.toFixed(2)))

    setConvertedAmount((amount * calculateRate).toFixed(2))

  }

  useEffect(() => {
    fetchExchangeRate()
  }, [fromCurrency, toCurrency, amount])
  return (
    <div className='mt-10 mx-auto flex justify-center items-center mb-[30px] flex-col '>
      <h2 className='mb-2' > CurrencyConverter</h2 >
      <div className='flex justify-center items-center mb-[30px] flex-col '>
        <div>
          <input className="border border-solid border-black rounded-md h-5 p-0 m-0 appearance-none bg-transparent" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name='amount' placeholder='Enter amount' />
          <select value={fromCurrency} onChange={(e) => setFormCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value={'INR'}>INR</option>
            <option value={'EUR'}>EUR</option>
          </select>
        </div>
        <p>To</p>
        <div>
          <input type="text" value={convertedAmount} readOnly className="border border-solid border-black rounded-md h-5 p-0 m-0 appearance-none bg-transparent" />
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value={'INR'}>INR</option>
            <option value={'EUR'}>EUR</option>
            <option value="KES">KES</option>
          </select>
        </div>
      </div>
      <div className=' mt-[5px] text-[16px] font-bold'>
        <p>
          Exchange Rate: 1 {fromCurrency} ={exchangeRate} {toCurrency}
        </p>
      </div>
    </div >
  )
}

export default CurrencyConverter 