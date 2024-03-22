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
        setQuote(result)
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

  console.log(quote);

  return (
    <div className='mt-10'>
      <h2 className='mb-2'>RandomQuoteGenerator</h2>
      {
        loading
          ?
        :
      }
    </div>
  )
}

export default RandomQuoteGenerator