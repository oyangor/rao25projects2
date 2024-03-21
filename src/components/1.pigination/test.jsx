import React from 'react'
import Pagination from '.'
import { useState } from 'react'

function PaginationTest() {
  const [currentPage, setCurrentPage] = useState(1)

  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`
  }))

  const itemsPerPage = 10

  function handlePageChange(currentPage) {
    setCurrentPage(currentPage)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem)

  //console.log(indexOfFirstItem, indexOfLastItem, currentListOfItems);

  return (
    <div>
      <h2>Pagination</h2>
      <ul className='flex mt-10 justify-between items-center mb-10 gap-2 h-5'>
        {
          currentListOfItems.map((listItem) => (
            <li key={listItem.id} className=' w-[50] h-[50] p-[20px] text-white text-center bg-slate-900 border border-solid border-gray-700'>{listItem.name}</li>
          ))
        }
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default PaginationTest