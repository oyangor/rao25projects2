// https://api.quotable.io/quotes/random

import React, { useEffect, useState } from 'react'

function RandomQuoteGenerator() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [quote, setQuote] = useState(null)

  async function fetchQoute() {
    try {
      setLoading(true)
      const res = await fetch('https://api.quotable.io/quotes/random', {
        method: 'GET'
      })
      const result = await res.json()

      if (result && result.length > 0) {
        setLoading(false)
        setQuote(result[0])
      }

    } catch (e) {
      console.log(e);
      setError(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQoute()
  }, [])

  if (error) {
    return <h3>There was an error while fetching data</h3>
  }

  // console.log(quote);

  return (
    <div className='mt-10 mx-auto flex justify-center items-center mb-[30px] flex-col '>
      <h2 className='mb-2'>RandomQuoteGenerator</h2>
      {
        loading
          ? <h3>Loading please wait...</h3>
          : <div >
            <p className='text-[20px]'> <span className='font-bold' >Author: </span><span className=' italic'>{quote?.author}</span></p>
            <p className='text-[20px]'><span className=' font-bold'>Quote:</span> <span className=' italic'>{quote?.content}</span></p>
            <button onClick={() => fetchQoute()}>Refresh</button>
          </div>
      }
    </div>
  )
}

export default RandomQuoteGenerator