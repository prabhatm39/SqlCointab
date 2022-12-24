import React from 'react'

export const Pagingation = ({page, nextPage, prevPage}) => {
    console.log(page);
  return (
    <div>
        <button onClick={prevPage} disabled={page==1}>Prev</button>
        <button onClick={nextPage}>Next</button>
    </div>
  )
}
