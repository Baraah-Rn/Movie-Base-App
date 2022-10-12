import React from 'react'

const SearchBox = ({ handleSubmit, searchValue, setSearchValue, typeValue, setTypeValue, year, setYear }) => {
  let yearRange = [...Array(42).keys()]

  return (
    <>
      <form onSubmit={handleSubmit}
        className=' search-form col-sm-4'>
        <input onChange={e => { setSearchValue(e.target.value) }}
          className='form-control search-input'
          placeholder='Type to search'
          value={searchValue}

        />



        <select value={year}
          onChange={e => { setYear(e.target.value) }}
          className=' year-container col-sm-2'>
          {yearRange.map((year) =>
            <option>{year + 1980}</option>
          )}
        </select>

        <select value={typeValue}
          onChange={e => { setTypeValue(e.target.value) }}
          className=' selection-container col-sm-2'>
          <option>Movie</option>
          <option>Series</option>
          <option>All</option>
        </select>

      </form>
    </>

  )
}

export default SearchBox