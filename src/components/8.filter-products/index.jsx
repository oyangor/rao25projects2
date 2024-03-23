import React, { useEffect, useState } from 'react'

function FilterProducts() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  async function fetchProducts() {
    try {
      setLoading(true)
      const res = await fetch('https://dummyjson.com/products', {
        method: 'GET'
      })
      const result = await res.json()



      if (result && result?.products && result?.products?.length) {
        setLoading(false)
        setError(null)
        setProducts(result.products)
        setFilteredItems(result.products)
      }
    } catch (error) {
      setError(error)
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    let copyProducts = [...products]
    // console.log(copyProducts);
    setFilteredItems(
      currentSelectedCategory !== ''
        ? copyProducts.filter(productItem => productItem.category.toLowerCase() === currentSelectedCategory.toLocaleLowerCase())
        : copyProducts
    )

  }, [currentSelectedCategory])

  const uniqueCategories = products && products.length > 0
    ? [...new Set(products.map(productItem => productItem.category))]
    : null

  // console.log(uniqueCategories);
  return (
    <div className='mt-10 mx-auto flex justify-center items-center mb-[30px] flex-col '>
      <h2 className='mb-2' > FilterProducts</h2 >
      {loading && <h3 className='mt-3'>Loading products! Please Wait...</h3>}
      {error && <h3>There was an error while carrying out your request please try again.</h3>}
      <div className='flex'>
        {/* <button onClick={() => setFilteredItems(products)}>All</button> */}
        {uniqueCategories && uniqueCategories.length > 0 &&
          uniqueCategories.map(uniqueCategoryItem => (
            <button key={uniqueCategoryItem} className={`${currentSelectedCategory === uniqueCategoryItem ? 'bg-black text-white' : null}`} onClick={() => setCurrentSelectedCategory(currentSelectedCategory !== '' && currentSelectedCategory === uniqueCategoryItem ? '' : uniqueCategoryItem)}>
              {uniqueCategoryItem}
            </button>
          ))
        }
      </div>

      <ul className='flex flex-wrap justify-center mt-10'>
        {
          filteredItems && filteredItems.length > 0
            ? filteredItems.map(productItem => (<li className=' w-[30%] flex justify-between items-center flex-col border border-solid border-black rounded-xl ' key={productItem.id}>
              <p className='text-[16px] font-bold'>{productItem.title}</p>
              <button>{productItem.category}</button>
            </li>))
            : null
        }
      </ul>
    </div>
  )
}

export default FilterProducts