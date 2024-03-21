import './pagination.css'
import React from 'react'

function Pagination({ currentPage = 1, totalPages = 10, onPageChange }) {

  function generateNoOfPages() {
    const pages = []
    for (let index = 1; index <= totalPages; index++) {
      pages.push(index)
    }
    return pages
  }
  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>{currentPage === 1 ? 'disabled' : 'PREV'}</button>
      {
        generateNoOfPages().map((pageNo) => (
          <button key={pageNo} onClick={() => onPageChange(pageNo)} className={`${currentPage === pageNo ? 'active' : ''}`}>{pageNo}</button>
        ))
      }
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === 10} >{currentPage === 10 ? 'disabled' : 'NEXT'}</button>
    </div>
  )
}

export default Pagination